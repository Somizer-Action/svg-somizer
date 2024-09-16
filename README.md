# svg-somizer




## Usage Example

```yml
name: SVG Optimization
on: [push]

jobs:
  optimize-svgs:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Run SVG Optimizer
        uses: somizers/svg@v1
        with:
          directories: './assets, ./icons'
```


```yml
name: SVG Optimization
on: [push]

jobs:
  optimize-svgs:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Run SVG Optimizer
        uses: somizers/svg@v1
```
