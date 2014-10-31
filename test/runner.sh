#!/bin/sh
BROCCOLI=$PWD/node_modules/.bin/broccoli
ok=true

for example in test/examples/*; do
  (
    cd ${example}

    rm -rf output
    if ${BROCCOLI} build output && node output/output.js; then
      echo "✓ ${example}"
      rm -rf output
    else
      echo "✘ ${example}"
      ok=false
    fi
  )
done

if ${ok} == "true"; then
  exit 0
else
  exit 1
fi
