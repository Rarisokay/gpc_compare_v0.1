<script>
  import Page2 from "./Page2.svelte";
  import Page3 from "./Page3.svelte";
  import Page4 from "./Page4.svelte";
  import Page5 from "./Page5.svelte";
  import Page6 from "./Page6.svelte";
  import Form from "./Form.svelte";
  import { openGPCFile } from "./gpc";

  let page = 0;
  let __greenInserts;
  let fileNames = ["No File1 Chosen", "No File2 Chosen"];

  const nextPage = () => {
    page++;
  };
  const previousPage = () => {
    page--;
  };
  const goToPage = (pageNo) => {
    page = pageNo;
  };

  const openFile = (_fileNo) => {
    openGPCFile().then((data) => {
      fileNames[_fileNo] = data;
    });
  };

  let _input = {
    version1: "",
    version2: "",
    designername: "",
    checkername: "",
  };
  let _filename1 = "";
  let _filename2 = "";
  // Get the current date and time
  let currentDate = new Date();

  // Format the date and time as strings
  //let dateString = currentDate.toLocaleDateString();
  let dateString = currentDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  let [month, day, year] = dateString.split("/");
  let formattedDate = `${day}/${month}/${year}`;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link rel="stylesheet" href="print.css" media="print" />
<body>
  {#if page == 0}
    <main>
      <h1 class="glow pointer">GSIM/MoviolaW Comparison Tool</h1>
      <h2 class="pointer">Please select .GPC files</h2>
      <p>Space in the filename will cause error</p>
      <div style="float:center;">
        <button
          type="button"
          id="gpc1"
          class="choose"
          on:click={() => {
            openFile(0);
          }}
          value="Open File 1">Open File 1</button
        >
        <p>{fileNames[0].split("\\").slice(-1)}</p>

        <button
          type="button"
          id="gpc2"
          class="choose"
          on:click={() => {
            openFile(1);
          }}
          value="Open File 2">Open File 2</button
        >
      </div>

      <p>{fileNames[1].split("\\").slice(-1)}</p>

      <Form
        next={() => {
          nextPage();
        }}
        input={_input}
      />

      <div class="footer">
        <h6>Developed by Data Aunz</h6>
      </div>
    </main>
  {/if}

  {#if page == 1}
    <div class="navbar" style="font-family: monospace;">
      <a
        href="#"
        on:click={() => {
          goToPage(0);
        }}><i class="fa fa-fw fa-home" /> Home</a
      >
      <a class="active" href="#"
        ><i class="fa fa-fw fa-arrow-circle-up" /> Updated Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(2);
        }}><i class="fa fa-fw fa-trash-o" /> Deleted Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(3);
        }}><i class="fa fa-fw fa-plus" /> Inserted Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(4);
        }}><i class="fa fa-fw fa-square" /> Show All</a
      >
      <a
        href="#"
        on:click={() => {
          print();
        }}><i class="fa fa-fw fa-print" /> Print</a
      >
    </div>

    <Page2 _fileNames={fileNames} input={_input} />
    <main2>
      <br />
      <br />

      <div class="footer">
        <div style="float:right;">
          <br /><button
            type="button"
            id="prevBtn"
            class="previous"
            on:click={() => {
              previousPage();
            }}>&laquo; Previous</button
          >
          <button
            type="button"
            id="nextBtn"
            class="next"
            on:click={() => {
              nextPage();
            }}>Next &raquo</button
          >
        </div>
        <h6>Data Aunz</h6>
      </div>
      <footer><p>Report production date: {formattedDate}</p></footer>
    </main2>
  {/if}

  {#if page == 2}
    <div class="navbar" style="font-family: monospace;">
      <a
        href="#"
        on:click={() => {
          goToPage(0);
        }}><i class="fa fa-fw fa-home" /> Home</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(1);
        }}><i class="fa fa-fw fa-arrow-circle-up" /> Updated Items</a
      >
      <a class="active" href="#"
        ><i class="fa fa-fw fa-trash-o" /> Deleted Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(3);
        }}><i class="fa fa-fw fa-plus" /> Inserted Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(4);
        }}><i class="fa fa-fw fa-square" /> Show All</a
      >
      <a
        href="#"
        on:click={() => {
          print();
        }}><i class="fa fa-fw fa-print" /> Print</a
      >
    </div>
    <Page3 _fileNames={fileNames} input={_input} />
    <main3>
      <br />
      <div class="footer">
        <div style="float:right;">
          <br /><button
            type="button"
            id="prevBtn"
            class="previous"
            on:click={() => {
              previousPage();
            }}>&laquo; Previous</button
          >
          <button
            type="button"
            id="nextBtn"
            class="next"
            on:click={() => {
              nextPage();
            }}>Next &raquo</button
          >
        </div>
      </div>
      <footer>
        <p>Report production date: {formattedDate}</p>
      </footer></main3
    >
  {/if}

  {#if page == 3}
    <div class="navbar" style="font-family: monospace;">
      <a
        href="#"
        on:click={() => {
          goToPage(0);
        }}><i class="fa fa-fw fa-home" /> Home</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(1);
        }}><i class="fa fa-fw fa-arrow-circle-up" /> Updated Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(2);
        }}><i class="fa fa-fw fa-trash-o" /> Deleted Items</a
      >
      <a class="active" href="#"
        ><i class="fa fa-fw fa-plus" /> Inserted Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(4);
        }}><i class="fa fa-fw fa-square" /> Show All</a
      >
      <a
        href="#"
        on:click={() => {
          print();
        }}><i class="fa fa-fw fa-print" /> Print</a
      >
    </div>
    <Page4 _fileNames={fileNames} input={_input} />
    <main4>
      <br />
      <div class="footer">
        <div style="float:right;">
          <br /><button
            type="button"
            id="prevBtn"
            class="previous"
            on:click={() => {
              previousPage();
            }}>&laquo; Previous</button
          >
          <button
            type="button"
            id="nextBtn"
            class="next"
            on:click={() => {
              nextPage();
            }}>Next &raquo</button
          >
        </div>
      </div>
      <footer>
        <p>Report production date: {formattedDate}</p>
      </footer></main4
    >
  {/if}

  {#if page == 4}
    <div class="navbar" style="font-family: monospace;">
      <a
        href="#"
        on:click={() => {
          goToPage(0);
        }}><i class="fa fa-fw fa-home" /> Home</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(1);
        }}><i class="fa fa-fw fa-arrow-circle-up" /> Updated Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(2);
        }}><i class="fa fa-fw fa-trash-o" /> Deleted Items</a
      >
      <a
        href="#"
        on:click={() => {
          goToPage(3);
        }}><i class="fa fa-fw fa-plus" /> Inserted Items</a
      >
      <a class="active" href="#"><i class="fa fa-fw fa-square" /> Show All</a>
      <a
        href="#"
        on:click={() => {
          print();
        }}><i class="fa fa-fw fa-print" /> Print</a
      >
    </div>
    <Page5 _fileNames={fileNames} input={_input} />
    <main5>
      <br /><br /><br /><br /><br /><br /><br />
      <div class="footer">
        <div style="float:right;">
          <br /><button
            type="button"
            id="prevBtn"
            class="previous"
            on:click={() => {
              previousPage();
            }}>&laquo; Previous</button
          >
          <button
            type="button"
            id="nextBtn"
            class="next"
            on:click={() => {
              nextPage();
            }}>Next &raquo</button
          >
        </div>
        <h6>Data Aunz</h6>
      </div>
      <footer>
        <p>Report production date: {formattedDate}</p>
      </footer>
    </main5>
  {/if}

  {#if page == 5}
    <Page6 _fileNames={fileNames} />
    <div class="footer">
      <div style="float:right;">
        <br /><button
          type="button"
          id="prevBtn"
          class="previous"
          on:click={() => {
            previousPage();
          }}>&laquo; Previous</button
        >
        <button
          type="button"
          id="nextBtn"
          class="next"
          on:click={() => {
            nextPage();
          }}>Next &raquo</button
        >
      </div>
      <h6>Data Aunz</h6>
    </div>
    <footer>
      <p>Report production date: {formattedDate}</p>
    </footer>
  {/if}
</body>

<style global>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 Auto;
    height: 100%;
    text-align: center;
    font-family: monospace;
  }

  h1 {
    color: #80489c;
    font-weight: bold;
    font-size: 250%;
    text-align: center;
    font-family: monospace;
  }

  h2 {
    color: #379237;
    text-transform: full-width;
    font-size: large;
    font-family: monospace;
    font-weight: bolder;
    text-align: center;
  }
  h6 {
    color: white;
    text-transform: full-width;
    font-size: xx-small;
    font-family: monospace;
    font-weight: bolder;
    text-align: center;
  }

  p {
    color: #379237;
    text-transform: full-width;
    font-size: medium;
    font-family: monospace;
    font-weight: auto;
    text-align: center;
  }

  @media (min-width: 540px) {
    main {
      max-width: none;
    }
  }
  .choose {
    background-color: #006666;
    color: white;
  }
  .next {
    background-color: #04aa6d;
    color: white;
  }
  .previous {
    background-color: #eeeeee;
    color: black;
  }

  button {
    background-color: #04aa6d;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: medium;
    font-family: monospace;
    cursor: pointer;
    transition: 0.2s;
  }
  button:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
  .glow {
    font-size: 70px;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 20px #fff, 0 0 30px #0794a7, 0 0 40px #0794a7,
      0 0 50px #0794a7, 0 0 60px #0794a7, 0 0 70px #0794a7, 0 0 80px #0794a7;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #0794a7;
    color: white;
    text-align: center;
    height: 50px;
  }

  body {
    font-family: monospace;

    padding-bottom: 70px;
  }

  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #0794a7;
    overflow: auto;
  }

  .navbar a {
    float: left;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 100%;
  }

  .navbar a:hover {
    background-color: rgb(0, 190, 220);
    transition-duration: 1s;
  }

  .active {
    background-color: rgb(0, 85, 124);
  }
  .detail {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .navbar a {
      float: none;
      display: block;
    }
  }
  .pointer {
    cursor: pointer;
  }
  .pageno {
    display: none;
  }

  @media print {
    @page {
      margin: 0mm 0mm 10mm 0mm;
      size: 21.59cm 13.97cm;
    }

    h5 {
      clear: both;
    }
    .navbar,
    .footer {
      display: none;
    }
    .pageno {
      display: contents;
      bottom: 0;
      right: 0;
    }
    .detail {
      display: contents;
      bottom: 0;
      right: 0;
    }
    .inserted {
      color: rgb(239, 1, 55);
      background-color: rgb(255, 232, 231) !important;
      print-color-adjust: exact;
    }
    footer {
      content: "Date: " attr(data-date) " Time: " attr(data-time);
    }
  }
</style>
