#!/bin/bash
# gedit theme switcher
array=("oblivion" "solarized-dark" "solarized-light" "classic")

for i in {1..5}; do
for theme in "${array[@]}"; do
gsettings set org.gnome.gedit.preferences.editor scheme $theme
gedit &
sleep 0.7
done
done
