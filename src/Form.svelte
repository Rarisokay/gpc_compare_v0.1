<script>
  export let next;

  export let input = {
    version1: "",
    version2: "",
    designername: "",
    checkername: "",
  };
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<body>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form>
          <div class="row">
            <div class="col-50">
              <label for="version">Version 1</label>
              <input
                bind:value={input.version1}
                type="text"
                id="version"
                name="version"
                placeholder="1.0"
              />
              <label for="designer">Designer's name</label>
              <input
                bind:value={input.designername}
                type="text"
                id="designer"
                name="address"
                placeholder="Rungaroon K"
              />
            </div>

            <div class="col-50">
              <label for="version2">Version 2</label>
              <input
                bind:value={input.version2}
                type="text"
                id="version"
                name="version"
                placeholder="1.1"
              />
              <label for="checker">Checker's name</label>
              <input
                bind:value={input.checkername}
                type="text"
                id="designer"
                name="address"
                placeholder="Tanaphon S"
              />
            </div>
          </div>

          <input
            type="button"
            value="Submit"
            class="btn"
            on:click={() => {
              next();
              console.log(input);
            }}
          />
        </form>
      </div>
    </div>
  </div>
</body>

<style>
  body {
    font-family: monospace;
    font-size: small;
    padding: 8px;
  }

  * {
    box-sizing: border-box;
  }

  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  .col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
  }

  .col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }

  .col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }

  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }

  .container {
    padding: 1% 35% 1% 35%;
    border-radius: 3px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  .btn {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .btn:hover {
    background-color: #45a049;
  }

  a {
    color: #2196f3;
  }

  hr {
    border: 1px solid lightgrey;
  }

  span.price {
    float: right;
    color: grey;
  }

  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-25 {
      margin-bottom: 20px;
    }
  }
</style>
