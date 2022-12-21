import { writable } from "svelte/store";

export let greenInserts = writable([])
export let redInserts = writable([])
export let deleteInsert = writable(false)
export let _insertData1 = writable([])
export let _insertData2 = writable([])
export let _Compare = writable({})