<script>
  import { readGPCFile, myFunction } from "./gpc";
  import { sortABC, sortBlockType } from "./sorting";
  import { onMount } from "svelte";
  import { Compare } from "./compare";
  import {
    greenInserts,
    redInserts,
    deleteInsert,
    _insertData1,
    _insertData2,
  } from "./store";
  export let _fileNames;
  let insertData1 = [];
  let insertData2 = [];
  let _Compare;
  let fileReady = false;

  const readGPC = () => {
    readGPCFile(_fileNames[0]).then((data1) => {
      insertData1 = sortABC(data1);
      readGPCFile(_fileNames[1]).then((data2) => {
        insertData2 = sortABC(data2);
        _Compare = new Compare(insertData1, insertData2);
        greenInserts.update((value) => {
          return _Compare.greenInserts;
        });
        redInserts.update((value) => {
          return _Compare.redInserts;
        });
        _insertData1.update((value) => {
          return insertData1;
        });
        _insertData2.update((value) => {
          return insertData2;
        });
        fileReady = true;
        deleteInsert.update((value) => true);
      });
    });
  };
  export let input = {
    version1: "",
    version2: "",
    designername: "",
    checkername: "",
  };

  onMount(() => {
    readGPC();
    deleteInsert.update((value) => {
      value = true;
    });
  });
</script>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

{#if fileReady}
  <main2>
    <h2 class="pointer">Updated Items</h2>
    <h5 class="detail">
      Designer:{input.designername} &emsp Checker:{input.checkername} &emsp Version:{input.version1}
      and &emsp {input.version2}
    </h5>
    <p class="pointer">
      Report insert colour = <strong style="color:red">Red</strong>
    </p>
    <p class="pointer">
      Report delete colour = <strong style="color:green">Green</strong>
    </p>

    <!-- <input
    type="text"
    id="myInput"
    on:keyup={() => {
      myFunction();
    }}
    placeholder="Search for names.."
    title="Type in a name"
  /> -->
    <div class="row">
      <div class="column">
        <table id="myTable">
          <thead>
            <tr class="header">
              <th colspan="3">{_fileNames[0].split("\\").slice(-1)}</th>
            </tr>
            <tr class="header">
              <th>Item</th>
              <th>Bit</th>
              <th>Mnemonic</th>
            </tr>
          </thead>
          {#each insertData1 as data1, index0}
            {#if !_Compare.greenInserts.some((d) => d === data1.name) && !_Compare.greenObjs[index0].greenBits.length == 0}
              {#each data1.bits as bit, index1}
                <tr>
                  {#if index1 == 0}
                    <td rowspan={data1.bits.length}>{data1.name}</td>
                  {/if}
                  <td
                    class={_Compare.greenObjs[index0].greenBits.includes(bit) &&
                    _Compare.greenObjs[index0].greenMnes.includes(
                      data1.mnemonics[index1]
                    )
                      ? "deleted"
                      : ""}>{bit}</td
                  >
                  <td
                    class={_Compare.greenObjs[index0].greenBits.includes(bit) &&
                    _Compare.greenObjs[index0].greenMnes.includes(
                      data1.mnemonics[index1]
                    )
                      ? "deleted"
                      : ""}>{data1.mnemonics[index1]}</td
                  >
                </tr>
              {/each}
            {/if}
          {/each}
        </table>
      </div>

      <div class="column">
        <table id="myTable">
          <thead>
            <tr class="header">
              <th colspan="3">{_fileNames[1].split("\\").slice(-1)}</th>
            </tr>
            <tr class="header">
              <th>Name</th>
              <th>Bit</th>
              <th>Mnemonic</th>
            </tr>
          </thead>
          {#each insertData2 as data2, index0}
            {#if !_Compare.redInserts.some((d) => d === data2.name) && !_Compare.redObjs[index0].redBits.length == 0}
              {#each data2.bits as bit, index1}
                <tr>
                  {#if index1 == 0}
                    <td rowspan={data2.bits.length}>{data2.name}</td>
                  {/if}
                  <td
                    class={_Compare.redObjs[index0].redBits.includes(bit) &&
                    _Compare.redObjs[index0].redMnes.includes(
                      data2.mnemonics[index1]
                    )
                      ? "inserted"
                      : ""}>{bit}</td
                  >
                  <td
                    class={_Compare.redObjs[index0].redBits.includes(bit) &&
                    _Compare.redObjs[index0].redMnes.includes(
                      data2.mnemonics[index1]
                    )
                      ? "inserted"
                      : ""}>{data2.mnemonics[index1]}</td
                  >
                </tr>
              {/each}
            {/if}
          {/each}
        </table>
      </div>
    </div></main2
  >
{/if}

<style>
  h2 {
    color: #80489c;
    font-weight: bold;
    font-size: 250%;
    text-align: center;
    font-family: monospace;
  }
  p {
    color: #000000;
    font-size: medium;
    font-weight: 100;
  }

  main2 {
    padding: 1em;
    max-width: 240px;
    margin: 0 Auto;
    height: 100%;
    font-family: monospace;
    margin-bottom: 60px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  button {
    background-color: #04aa6d;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-family: monospace;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }

  * {
    box-sizing: border-box;
  }

  .row {
    margin-left: -5px;
    margin-right: -5px;
  }

  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 16px;
  }



  #myTable {
    margin-top: 2%;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-size: large;
  }

  #myTable th,
  #myTable td {
    text-align: left;
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 16px;
  }

  #myTable tr {
    border-bottom: 1px solid #ddd;
  }

  #myTable tr.header,
  #myTable tr:hover {
    background-color: #f1f1f1;
  }

  .deleted {
    color: green;
    background-color: rgb(213, 250, 244);
  }
  .inserted {
    color: rgb(239, 1, 55);
    background-color: rgb(255, 232, 231) !important;
    print-color-adjust: exact;
  }
  .pointer {
    cursor: pointer;
  }
  .detail {
    display: none;
  }

  @media print {
    @page {
      margin: 0mm 2mm 10mm 2mm;
      size: auto;
    }
    thead {
      display: table-header-group;
    }

    h1 {
      display: none;
    }

    #myTable tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }
    #myTable td {
      text-align: left;
      padding: 8px;
      border: 1px solid #ddd;
      font-size: 12px;
      page-break-inside: avoid;
    }
    .detail {
      display: contents;
      bottom: 0;
      right: 0;
    }
    .notprint {
      display: none;
    }
    .inserted {
      color: rgb(239, 1, 55);
      background-color: rgb(255, 232, 231) !important;
      print-color-adjust: exact;
    }
    .inserted:hover {
      background-color: rgb(252, 8, 65);
    }
  }
</style>
