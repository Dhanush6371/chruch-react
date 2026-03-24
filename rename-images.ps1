# Image Renaming Script for Church Website
# This script will automatically rename all images to the new naming convention

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Church Website Image Renaming Script  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$imagesPath = "public\images-new"

# Check if directory exists
if (-Not (Test-Path $imagesPath)) {
    Write-Host "ERROR: Directory '$imagesPath' not found!" -ForegroundColor Red
    Write-Host "Please run this script from the project root directory." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Write-Host "Found images directory: $imagesPath" -ForegroundColor Green
Write-Host ""
Write-Host "Starting image renaming process..." -ForegroundColor Yellow
Write-Host ""

# Change to images directory
Set-Location $imagesPath

# Counter for renamed files
$renamedCount = 0

# Function to rename file safely
function Rename-ImageFile {
    param($oldName, $newName)
    
    if (Test-Path $oldName) {
        if (Test-Path $newName) {
            Write-Host "  [SKIP] $newName already exists" -ForegroundColor Yellow
        } else {
            Rename-Item $oldName $newName
            Write-Host "  [OK] $oldName -> $newName" -ForegroundColor Green
            $script:renamedCount++
        }
    } else {
        Write-Host "  [SKIP] $oldName not found" -ForegroundColor Gray
    }
}

# Function to copy file safely
function Copy-ImageFile {
    param($sourceName, $newName)
    
    if (Test-Path $sourceName) {
        if (Test-Path $newName) {
            Write-Host "  [SKIP] $newName already exists" -ForegroundColor Yellow
        } else {
            Copy-Item $sourceName $newName
            Write-Host "  [OK] Copied $sourceName -> $newName" -ForegroundColor Green
            $script:renamedCount++
        }
    } else {
        Write-Host "  [SKIP] $sourceName not found" -ForegroundColor Gray
    }
}

# HOME PAGE IMAGES
Write-Host "HOME PAGE:" -ForegroundColor Cyan
Rename-ImageFile "home-hero-1.jpg" "home-1.jpg"
Rename-ImageFile "home-hero-2.jpg" "home-2.jpg"
Rename-ImageFile "home-hero-3.jpg" "home-3.jpg"
Rename-ImageFile "home-hero-4.jpg" "home-4.jpg"
Rename-ImageFile "home-hero-5.jpg" "home-5.jpg"
Rename-ImageFile "home-hero-1.mp4" "home-1.mp4"
Copy-ImageFile "dark-forest.jpg" "home-6.jpg"
Copy-ImageFile "mountain-road.jpg" "home-7.jpg"
Write-Host ""

# STORY PAGE IMAGES
Write-Host "STORY PAGE:" -ForegroundColor Cyan
Rename-ImageFile "london-building.jpg" "story-1.jpg"
Rename-ImageFile "london-building.mp4" "story-1.mp4"
Copy-ImageFile "dark-forest.jpg" "story-2.jpg"
Copy-ImageFile "mountain-road.jpg" "story-3.jpg"
Rename-ImageFile "sunset-road.jpg" "story-4.jpg"
Write-Host ""

# BELIEF PAGE IMAGES
Write-Host "BELIEF PAGE:" -ForegroundColor Cyan
Rename-ImageFile "belief-hero.jpg" "belief-1.jpg"
Rename-ImageFile "belief-video-poster.jpg" "belief-2.jpg"
Rename-ImageFile "forest-aerial.jpg" "belief-3.jpg"
Rename-ImageFile "forest-road-aerial.jpg" "belief-4.jpg"
Write-Host ""

# INVITATION PAGE IMAGES
Write-Host "INVITATION PAGE:" -ForegroundColor Cyan
Rename-ImageFile "invitation-hero.jpg" "invitation-1.jpg"
Rename-ImageFile "invitation-video-poster.jpg" "invitation-2.jpg"
Write-Host ""

# TEAM PAGE IMAGES
Write-Host "TEAM PAGE:" -ForegroundColor Cyan
Rename-ImageFile "team-hero.jpg" "team-1.jpg"
Rename-ImageFile "bruno.jpg" "team-2.jpg"
Rename-ImageFile "jinhui.jpg" "team-3.jpg"
Rename-ImageFile "johntower.jpg" "team-4.jpg"
Rename-ImageFile "matt-fox.jpg" "team-5.jpg"
Rename-ImageFile "saagar.jpg" "team-6.jpg"
Rename-ImageFile "sheikh.jpg" "team-7.jpg"
Rename-ImageFile "team_1.jpeg" "team-8.jpeg"
Rename-ImageFile "team-2.jpeg" "team-9.jpeg"
Rename-ImageFile "team-member-1.jpg" "team-10.jpg"
Rename-ImageFile "team-member-2.jpg" "team-11.jpg"
Rename-ImageFile "team-member-3.jpg" "team-12.jpg"
Rename-ImageFile "team-member-4.jpg" "team-13.jpg"
Write-Host ""

# Return to project root
Set-Location ..\..

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RENAMING COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total files renamed/copied: $renamedCount" -ForegroundColor Green
Write-Host ""
Write-Host "Your images have been renamed successfully!" -ForegroundColor Green
Write-Host "The website will now use the new naming convention." -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to exit"
