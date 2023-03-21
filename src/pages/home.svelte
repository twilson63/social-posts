<script>
  import Header from "../components/header.svelte";
  import Note from "../components/note.svelte";
  import Footer from "../components/footer.svelte";
  import { robot } from "../store";

  const send = $robot.send;
  $: context = $robot.context;
  $: current = $robot.machine.current;
</script>

{current}
{#if current === "loading"}
  <div
    class="grid items-center bg-[#f2f3f4] min-h-screen min-w-screen justify-center"
  >
    <img
      src="https://arweave.net/IkMJRqi_0Xx_QhstK4WE3rsQqQxC07n84UagPgqGXfc"
      alt="loading"
    />
  </div>
{:else}
  <Header />
  <main class="my-16">
    {#each [1, 2, 3] as x}
      <Note />
    {/each}
  </main>
  <Footer />
{/if}
