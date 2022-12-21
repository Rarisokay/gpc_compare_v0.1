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

  let insertData1 = [];
  let insertData2 = [];
  let _Compare;
  let fileReady = false;

  let previous;

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
  export let _fileNames;

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
  // Define the data for the tables

  // Filter the data to show only the values that are the same in both tables
</script>

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
      {#each insertData1 as data1}
        <div class="card">
          {#each data1.bits as bit, i}
            <tr>
              {#if i == 0}
                <td rowspan={data1.bits.length}>{data1.name}</td>
              {/if}
              <td class={i % 2 == 0 ? "deleted" : "inserted"}>{bit}</td>
              <td>{data1.mnemonics[i]}</td>
            </tr>
          {/each}
        </div>
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
      {#each insertData2 as data2}
        <div class="card">
          {#each data2.bits as bit, i}
            <tr>
              {#if i == 0}
                <td rowspan={data2.bits.length}>{data2.name}</td>
              {/if}
              <td class={i % 2 == 0 ? "deleted" : "inserted"}>{bit}</td>
              <td>{data2.mnemonics[i]}</td>
            </tr>
          {/each}
        </div>
      {/each}
      <br />
    </table>
  </div>
</div>

{#each insertData2 as data2, index}
  {#if data2.name == previous.name}
    <tr>
      <td />
      <td>{data2.bits[index]}</td>
      <td>{data2.mnemonics[index]}</td>
    </tr>
  {:else}
    <tr>
      <td>{data2.name}</td>
      <td>{data2.bits[index]}</td>
      <td>{data2.mnemonics[index]}</td>
    </tr>
  {/if}
{/each}

<style>
  /* Style the cards and tables */
  .card {
    display: inline-block;
    margin: 1em;
    padding: 1em;
    background-color: beige;
    text-align: center;
    width: 100%;
  }
  .row {
    margin-left: -5px;
    margin-right: -5px;
  }

  .column {
    float: left;
    width: 45%;
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
    border: 1px solid black;
    font-size: large;
  }

  #myTable th,
  #myTable td {
    text-align: left;
    padding: 12px;
    border: 1px solid red;
    font-size: 16px;
  }

  #myTable tr {
    border-bottom: 1px solid #ddd;
  }

  #myTable tr.header,
  #myTable tr:hover {
    background-color: #f1f1f1;
  }

  .detail {
    display: none;
  }

  @media print {
    h1 {
      display: none;
    }
  }
</style>
