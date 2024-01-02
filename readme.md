```bash
git clone git@github.com:brillout/vite-sourcemap-bug
cd vite-sourcemap-bug/
pnpm install
pnpm run dev
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/vite-sourcemap-bug && cd vite-sourcemap-bug/ && pnpm install && pnpm run dev
```

Go to [localhost:5173](http://localhost:5173), see the stack trace logged in the terminal, and observe that the lines shown in the stack trace don't match the actual lines of the source code.

```
Error
    at App (/home/romu/tmp/vite-sourcemap-bug/src/App.tsx:12:17)
    ...
```

Line `12` is wrong: it should be `6` instead.
