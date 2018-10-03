let i, b, n;                                // quest of variables

// i - numbers that will be built in a cube with step 3
// n - limit, inter with keyboard of number with step 3
// b - building in the cube

n = prompt("3 <= i <= n, введите n:", " "); // enter with keyboard (limiter)
for (i = 3; i <= n; i += 3) {               // condition 3 to n by step 3
	b = Math.pow(i, 3);                     // building in the cube
	alert(b);                               
}