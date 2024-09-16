# Svg Somizer

**Svg Somizer** is an SVG Optimizer by Somizer that utilizes [SVGO](https://github.com/svg/svgo) to optimize SVG files, helping reduce file size and improve performance in your projects.

## Usage Example

### Optimize Specific Directories

To optimize SVG files located in specific directories, you can specify the directories as a comma-separated list:


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

### Optimize the Entire Project Directory

To optimize all SVG files across the entire project directory, simply omit the `directories` input:

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
