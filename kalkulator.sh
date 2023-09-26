#!/bin/bash


read -p "Penambahan? Jika Ya, Input + lalu Enter!:  " aab
if (aab='+') then
read -p "Masukkan Angka Pertama!" aba
read -p "Masukkan Angka Kedua!" abb

let cab=$aba+$abb

echo "$cab"


read -p "Perkalian? Jika Ya, Input x lalu Enter!:  " cbb
elif (cbb='x') then
read -p "Masukkan Angka Pertama!" aaa
read -p "Masukkan Angka Kedua!" ccc

let cbc=$aaa*$ccc

echo "$cbc"
fi



