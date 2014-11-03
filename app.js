/*************************************************/
/* Ejercicio para entender objetos en JavaScript */
/*************************************************/

/* Aqui hay muchas maldades */

var window = window || global,
	global = global || window;

var T = {
	x: 8,
	l: {
		x: 2,
		l: {
			x: 8,
			l: null,
			r: null
		},
		r: {
			x: 7,
			l: null,
			r: null
		}
	},
	r: {
		global: {
			crazy: 22
		},
		x: 6,
		l: null,
		r: null,
		d: [3, 4, 5],
		o: {},
		g: global,
		w: window,
		u: undefined,
		t: true,
		n: Object({
			xn: 6
		}),
		s: String({
			xn: 6
		}),
		f: Object([2, 3, 4]),
		z: {
			zn: [2]
		}
	}
};

/* Solucion */

function solution(T) {

	/* Aqui hay que programar la solucion */

	return count(T); // Recuerden retornar el valor

};

function count(T) {
  // Usando el modulo traverse de Substack.
  // https://github.com/substack/js-traverse
  var traverse = require("traverse");
  // Usando el metodo reduce de traverse
  // que devuelve todos los nodos y permite identificar
  // los nodos extremos (isLeaf)
  var leaves = traverse(T).reduce(function(accumulated, val) {
    if (this.isLeaf && typeof val === "number"
      // Solo dentro de los Object()
      && typeof this.parent.node === 'object'
      // ...los que aparecen dentro de un String(), Array() 
      // u otra cosa que no sea Object() no sirve
      && (Object.getPrototypeOf(this.parent.node) === Object.prototype)
    ) {
      accumulated.push(val);
    }
    return accumulated;
  }, []);

  return leaves.length;
}

/* La parte mas obvia */

console.log(solution(T)); // La respuesta correcta es 7

/********************************************/
/* EL PRIMERO QUE LO SOLUCIONE TIENE PREMIO */
/********************************************/
