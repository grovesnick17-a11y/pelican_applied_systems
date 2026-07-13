$ErrorActionPreference = 'Stop'

$source = Join-Path $PSScriptRoot 'Pelican Applied Systems.dc.html'
$target = Join-Path $PSScriptRoot 'index.html'

Copy-Item -LiteralPath $source -Destination $target -Force
Write-Host "Built index.html from Pelican Applied Systems.dc.html"
