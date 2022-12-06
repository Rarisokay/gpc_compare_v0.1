<script>
    import { onMount } from 'svelte';
	import { Card, CardBody, CardHeader, Input, Table, Column, Styles } from 'sveltestrap';
	
	let search = undefined;
	let users = [];
	$: visibleUsers = search ?
		users.filter(user => {
			return user.name.first.match(`${search}.*`) || user.name.last.match(`${search}.*`)
		}) : users;
    let mFunction =[];
	onMount(async () => {
		const resp = await fetch('https://randomuser.me/api?results=25')
		const data = await resp.json();
		users = data.results;
	});
</script>

<Card>
	<CardHeader>
		<Input type="search" bind:value={search} class="ms-auto w-auto" placeholder="Search" />
	</CardHeader>
	<CardBody>
		<Table striped rows={visibleUsers} let:row={user}>
			<Column header="First">
				{user.name.first}
			</Column>
			<Column header="Last">
				{user.name.last}
			</Column>
			<Column header="Email">
				{user.email}
			</Column>
		</Table>
	</CardBody>
</Card>


<style>
    @import url('https://gthomas-appfolio.github.io/bootstrap-coastline/bootstrap-coastline.css');
</style>


