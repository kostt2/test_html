// Programmai jāsaskaita  skaitļus (piem. 1 + 2 + 3 ....) un jābūt iespējai mainīt no kurā skaitļa līdz kuram skaitīt. 

// 1, 3 -> 1 + 2 + 3 = 6
// 10, 14 -> 10 + 11 + 12 + 13 + 14 = 59

var no_skaitlis, lidz_skaitlis, summa, skait

no_skaitlis = prompt("Ievadiet pirmo skaitli ->")
lidz_skaitlis = prompt("Ievadiet pedējo skaitli ->")
skait = 0

var txt = '1 + 2 +... +'
txt += lidz_skaitlis + ' ='
while (skait <= lidz_skaitlis) {
  summa += skait
  skait++
}

document.write(txt + summa)