<script>
  import { Route } from "tinro";
  import Home from "./pages/home.svelte";
  import Form from "./pages/form.svelte";
</script>

<Route path="/">
  <Home />
</Route>
<Route path="/compose/note">
  <Form />
</Route>
<Route path="/:user/status/:id">
  <div>Show</div>
</Route>
