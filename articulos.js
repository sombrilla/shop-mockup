var categorias = ['Desktops', 'Laptops & notebooks', 'Componentes', 'Tablets'];

var dsk = categorias['Desktops'] = ['PC', 'MAC'];
var lap = categorias['Laptops & notebooks'] = ['PC', 'MAC'];
var com = categorias['Componentes'] = ['Mouse', 'Monitores', 'Impresoras', 'Scanners'];
var tab = categorias['Tablets'] = ['Samsung', 'Apple'];

var dPcs = categorias['Desktops']['PC'] = [];
var dMac = categorias['Desktops']['MAC'] = [];

var lPcs = categorias['Laptops & notebooks']['PC'] = [];
var lMac = categorias['Laptops & notebooks']['MAC'] = [];

var cMou = categorias['Componentes']['Mouse'] = [];
var cMon = categorias['Componentes']['Monitores'] = [];
var cImp = categorias['Componentes']['Impresoras'] = [];
var cScn = categorias['Componentes']['Scanners'] = [];

var tSam = categorias['Tablets']['Samsung'] = [];
var tApp = categorias['Tablets']['Apple'] = [];

////////////// PCS DESKTOP

dPcs[0] = {
	nombre : 'Completa Core 2 Duo',
	info: 'Info PC 1',
	masinfo: 'Procesador: CORE 2 DUO \nMemoria: 4gb \nDisco Rigido: 160gb \nLECTORA CD DVD USB SONIDO RED \nWINDOWS 7 o 10 \nMONITOR 17", TECLADO y MOUSE',
	imgs: ['img/dsktp/pc1/1.jpg','img/dsktp/pc1/2.jpg','img/dsktp/pc1/3.jpg'],
	precio: 7600,
	cantidad: 0
}

dPcs[1] = {
	nombre : 'Dell Optiplex 3050',
	info: 'Info PC 2',
	masinfo: '-Intel Core i5 -7500.\n-500Gb 7200rpm.\n-4GB DDR4 2400MHz.\n-Windows 10 Profesional 64 bits.\n-Pantalla: Monitor P2017H HD 1600 x 900 at 60Hz ',
	imgs: ['img/dsktp/pc2/1.jpg','img/dsktp/pc2/2.jpg','img/dsktp/pc2/3.jpg'],
	precio: 24000,
	cantidad: 0
}

dPcs[2] = {
	nombre : 'Dell Core I5 7400',
	info: 'Info PC 3',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc3.jpg'],
	precio: 7600,
	cantidad: 0
}

dPcs[3] = {
	nombre : 'PC 4',
	info: 'Info PC 4',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc4.jpg'],
	precio: 7600,
	cantidad: 0
}

dPcs[4] = {
	nombre : 'PC 5',
	info: 'Info PC 5',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc5.jpg'],
	precio: 7600,
	cantidad: 0
}

/////////// MAC DESKTOP

dMac[0] = {
	nombre : 'MAC 1',
	info: 'Info MAC 1',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

dMac[1] = {
	nombre : 'MAC 2',
	info: 'Info MAC 2',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

dMac[2] = {
	nombre : 'MAC 3',
	info: 'Info MAC 3',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc3.jpg'],
	precio: 7600,
	cantidad: 0
}

dMac[3] = {
	nombre : 'MAC 4',
	info: 'Info MAC 4',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc4.jpg'],
	precio: 7600,
	cantidad: 0
}


////////////// PCS LAPTOP

lPcs[0] = {
	nombre : 'Laptop PC 1',
	info: 'Info Laptop PC 1',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

lPcs[1] = {
	nombre : 'Laptop PC 2',
	info: 'Info Laptop PC 2',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

lPcs[2] = {
	nombre : 'Laptop PC 3',
	info: 'Info Laptop PC 3',
	masinfo: 'Info PC 1',
	imgs: ['img/dsktp/pc3.jpg'],
	precio: 7600,
	cantidad: 0
}

////////////// MAC LAPTOP

lMac[0] = {
	nombre : 'Laptop MAC 1',
	info: 'Info Laptop MAC 1',
	masinfo: 'Info MAC 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

lMac[1] = {
	nombre : 'Laptop MAC 2',
	info: 'Info Laptop MAC 2',
	masinfo: 'Info MAC 1',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

lMac[2] = {
	nombre : 'Laptop MAC 3',
	info: 'Info Laptop MAC 3',
	masinfo: 'Info MAC 1',
	imgs: ['img/dsktp/pc3.jpg'],
	precio: 7600,
	cantidad: 0
}


////////////// MOUSE

cMou[0] = {
	nombre : 'Mouse 1',
	info: 'Info Mouse 1',
	masinfo: 'Info Mouse 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

cMou[1] = {
	nombre : 'Mouse 2',
	info: 'Info Mouse 2',
	masinfo: 'Info Mouse 2',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

////////////// MONITOR

cMon[0] = {
	nombre : 'Monitor 1',
	info: 'Info Monitor 1',
	masinfo: 'Info Monitor 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

cMon[1] = {
	nombre : 'Monitor 2',
	info: 'Info Monitor 2',
	masinfo: 'Info Monitor 2',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

////////////// IMPRESORAS

cImp[0] = {
	nombre : 'Impresora 1',
	info: 'Info Impresora 1',
	masinfo: 'Info Impresora 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

cImp[1] = {
	nombre : 'Impresora 2',
	info: 'Info Impresora 2',
	masinfo: 'Info Impresora 2',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

////////////// SCANNERS

cScn[0] = {
	nombre : 'Scanner 1',
	info: 'Info Scanner 1',
	masinfo: 'Info Scanner 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}


////////////// TABLET SAMSUNG

tSam[0] = {
	nombre : 'Tablet Samsung 1',
	info: 'Info Tablet Samsung 1',
	masinfo: 'Info Tablet Samsung 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

tSam[1] = {
	nombre : 'Laptop Tablet Samsung 2',
	info: 'Info Tablet Samsung 2',
	masinfo: 'Info Tablet Samsung 2',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}

tSam[2] = {
	nombre : 'Tablet Samsung 3',
	info: 'Info Tablet Samsung 3',
	masinfo: 'Info Tablet Samsung 3',
	imgs: ['img/dsktp/pc3.jpg'],
	precio: 7600,
	cantidad: 0
}

////////////// TABLET APPLE

tApp[0] = {
	nombre : 'Tablet Apple 1',
	info: 'Info Tablet Apple 1',
	masinfo: 'Info Tablet Apple 1',
	imgs: ['img/dsktp/pc1.jpg'],
	precio: 7600,
	cantidad: 0
}

tApp[1] = {
	nombre : 'Laptop Tablet Apple 2',
	info: 'Info Tablet Apple 2',
	masinfo: 'Info Tablet Apple 2',
	imgs: ['img/dsktp/pc2.jpg'],
	precio: 7600,
	cantidad: 0
}
