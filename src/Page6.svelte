<script>
  let name = "world";
  let yes = false;
</script>

<h1>This is a printing test code.</h1>
<h1>Hello {name}!</h1>
<p>Show report</p>
<form>
  <div class="row">
    <div class="col-50">
      <label for="version">Version 1</label>
      <input
        type="text"
        id="version"
        name="version"
        placeholder="1.0"
        bind:value={yes}
      />
      <label for="designer">Designer's name</label>
      <input
        type="text"
        id="designer"
        name="address"
        placeholder="Rungaroon K"
      />
    </div>

    <div class="col-50">
      <label for="version2">Version 2</label>
      <input type="text" id="version" name="version" placeholder="1.1" />
      <label for="checker">Checker's name</label>
      <input
        type="text"
        id="designer"
        name="address"
        placeholder="Tanaphon S"
      />
    </div>
  </div>
  {#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
    <p>
      You must opt-in to continue. If you're not paying, you're the product.
    </p>
  {/if}
  <input type="button" value="Submit" class="btn" disabled={!yes} />
</form>

<style>
  @page {
    margin: 0;
  }

  @media print {
    h1 {
      display: none;
    }
  }
</style>
