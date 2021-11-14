import {readFileSync} from 'fs';
import {preprocess} from "svelte/compiler";
import processors from "svelte-preprocess";

(async () => {
    await preprocess(
        readFileSync('./src/index.svelte', 'utf8'),
        processors.typescript(),
        { filename: 'index.svelte' }
    );
})();
