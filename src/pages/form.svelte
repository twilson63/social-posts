<script>
  let note;

  function handleSubmit() {}
</script>

<header class="flex flex-row mt-4 mx-8 items-center justify-between">
  <a href="/">Cancel</a>
  <button
    class="btn rounded-full bg-orange-400 border-orange-400"
    disabled={!note}>Post</button
  >
</header>
<main class="flex mx-4 mt-4 space-x-4">
  <img class="mask mask-circle h-16 w-16 bg-orange-400" alt="" src="" />
  <form class="w-4/5" on:submit|preventDefault={handleSubmit}>
    <div class="form-control">
      <textarea
        bind:value={note}
        class="textarea h-72"
        placeholder="What's going on?"
      />
    </div>
  </form>
</main>
