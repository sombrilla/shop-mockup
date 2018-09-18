window.onload = CreateCart;
var currentProducts = []
var currentCat, currentProd;

var title = document.getElementsByTagName('h1')[0];
title.onclick = randomHome;

var filTab = document.getElementById('filTab');
filTab.onclick = ToggleFilt;
//filTab.onmouseleave = ToggleFilt;

var catDsk = document.getElementById('catDsk').parentNode;
catDsk.cat = 'cat1';
catDsk.onmouseenter = ToggleCat;
catDsk.onmouseleave = ToggleCat;

var catLap = document.getElementById('catLap').parentNode;
catLap.cat = 'cat2';
catLap.onmouseenter = ToggleCat;
catLap.onmouseleave = ToggleCat;

var catCom = document.getElementById('catCom').parentNode;
catCom.cat = 'cat3';
catCom.onmouseenter = ToggleCat;
catCom.onmouseleave = ToggleCat;

var catTab = document.getElementById('catTab').parentNode;
catTab.cat = 'cat4';
catTab.onmouseenter = ToggleCat;
catTab.onmouseleave = ToggleCat;


var totalCompras = 0;
var cantidadProductosEnCarrito = 0;

var dsk = document.getElementById('cat1').getElementsByTagName('li');
for(var i = 0; i < dsk.length;i++)
{
	dsk[i].cat = 'Desktops';
	dsk[i].onclick = fillProducts;
}

var lap = document.getElementById('cat2').getElementsByTagName('li');
for(var i = 0; i < lap.length;i++)
{
	lap[i].cat = 'Laptops';
	lap[i].onclick = fillProducts;
}

var comp = document.getElementById('cat3').getElementsByTagName('li');
for(var i = 0; i < comp.length;i++)
{
	comp[i].onclick = fillProducts;
}

var tabl = document.getElementById('cat4').getElementsByTagName('li');
for(var i = 0; i < tabl.length;i++)
{
	tabl[i].onclick = fillProducts;
}

var carrito = document.getElementById('carrito');
var carritoFull;

var isCartOpen = false;

carrito.onmouseenter = function()
{
	if(!isCartOpen)
	{
		carritoFull.style.opacity = '0.5';
		//carritoFull.style.height = '15%';
	}
}
carrito.onmouseleave = function()
{
	if(!isCartOpen)
	{
		carritoFull.style.opacity = '0';
		//carritoFull.style.height = '0';
	}
}



var cantidadCarrito = document.createElement('span');
cantidadCarrito.id = 'resCantidad';
cantidadCarrito.appendChild(document.createTextNode(currentProducts.length));

carrito.appendChild(cantidadCarrito);

var precioCarrito = document.createElement('span');
precioCarrito.id = 'resPrecio';

carrito.appendChild(precioCarrito);

carrito.onclick = OpenCart;

var holder = document.getElementsByClassName('pHolder')[0];
var catDiv = document.getElementById('categorias');
/*
var imagenesBanner = ['i1.jpg','i2.jpg','i3.jpg'];
var currentImg = document.getElementById('banner').getElementsByTagName('div')[0];
var flechaPrev = document.getElementById('flechaPrev');
flechaPrev.onclick = prevImage;
var flechaNext = document.getElementById('flechaNext');
flechaNext.onclick = nextImage;
currentImg.index = 0;
var bannerInterval = setInterval(nextImage,9000);

function nextImage()
{
	if(currentImg.index < imagenesBanner.length-1)
	{
		currentImg.index++;
	}
	else
	{
		currentImg.index = 0;
	}
	currentImg.style.background = 'url(img/banner/'+imagenesBanner[currentImg.index]+') no-repeat center center / cover';
	clearInterval(bannerInterval);
	bannerInterval = setTimeout(nextImage,9000);
}

function prevImage()
{
	if(currentImg.index > 0)
	{
		currentImg.index--;
	}
	else
	{
		currentImg.index = imagenesBanner.length-1;
	}
	currentImg.style.background = 'url(img/banner/'+imagenesBanner[currentImg.index]+') no-repeat center center / cover';
	clearInterval(bannerInterval);
	bannerInterval = setTimeout(nextImage,9000);
}
*/

function UpdateCart()
{
	
	if(currentProducts.length > 0)
	{
		precioCarrito.innerHTML = '($' + totalCompras + ')';
	}
	else
	{
		precioCarrito.innerHTML = '';
	}
	
	
	cantidadCarrito.innerHTML = cantidadProductosEnCarrito;
	
	var divCarrito = document.getElementById('cartProd');
	
	ClearCarrito(false);
	
	var proUl = document.getElementById('proUl');
	
	var total = document.getElementById('total');
	total.innerHTML = '<span>Total: </span>$' + totalCompras;
	
	for(var i = 0; i< currentProducts.length; i++)
	{
		var proLi = document.createElement('li');
		proLi.className = 'productsLi';
		proUl.appendChild(proLi);
		proLi.index = i;
		
		/*
		proLi.onmouseenter = function()
		{
			var x = document.getElementsByClassName('productsLi')[this.index].getElementsByTagName('a')[0];
			x.style.width = '32px';
			x.parentNode.style.width = '10%';
		}
		
		proLi.onmouseleave = function()
		{
			var x = document.getElementsByClassName('productsLi')[this.index].getElementsByTagName('a')[0];
			x.style.width = '0px';
			x.parentNode.style.width = '0%';
		}
		*/
		var ul = document.createElement('ul');
		proLi.appendChild(ul);
		
		var borrarButt = document.createElement('li');
		var a = document.createElement('a');
		a.innerHTML = '&#128473;';
		borrarButt.id = 'borrarProducto';
		
		borrarButt.index = i;
		borrarButt.puedeBorrar = true;
		borrarButt.onclick = function borrarProd()
		{
			
			if(this.puedeBorrar == true)
			{
				var item = document.getElementsByClassName('productsLi')[this.index];
				cantidadProductosEnCarrito--;
				totalCompras -= currentProducts[this.index].precio;
				total.innerHTML = '<span>Total: </span>$' + totalCompras;
				
				currentProducts[this.index].cantidad --;
				var can = currentProducts[this.index].cantidad;
				
				
				

				if(can < 1)
				{
					currentProducts.splice(this.index,1);
					//item.style.position = 'absolute';
					item.style.opacity = '0';
					this.puedeBorrar = false;
					setTimeout(function(){
						this.puedeBorrar = true;
						proUl.removeChild(item);
						UpdateCart();
					},300);
					
				}
				else
				{
					UpdateCart();
				}
			}
			
		}
		borrarButt.appendChild(a);
		ul.appendChild(borrarButt);
		
		var imagenLi = document.createElement('li');
		ul.appendChild(imagenLi);
		/*
		var imagen = document.createElement('img');
		imagen.src = currentProducts[i].imgs[0];
		imagenLi.appendChild(imagen);
		*/
		var imagen = document.createElement('div');
		imagen.style.backgroundImage = 'url(' + currentProducts[i].imgs[0] + ')';
		imagenLi.appendChild(imagen);
		
		var nombre = document.createElement('li');
		nombre.appendChild(document.createTextNode(currentProducts[i].nombre));
		ul.appendChild(nombre);
		
		var cantP = document.createElement('li');
		cantP.appendChild(document.createTextNode('x' + currentProducts[i].cantidad));
		ul.appendChild(cantP);
		
		var precio = document.createElement('li');
		precio.appendChild(document.createTextNode('$' + currentProducts[i].precio));
		ul.appendChild(precio);
	}
}

function CreateCart()
{
	var filt = document.getElementById('filtro');
	//filt.style.top = '40%';
	//filt.style.transform = 'scale(1)';
	filt.isOpen = false;
	
	randomHome();
	
	var div = document.createElement('div');
	div.id = 'cartProd';
	carritoFull = div;
	/*	
	div.onmouseenter = function()
	{
		if(!isCartOpen)
		{
			this.style.right = '-350px';
			carrito.style.right = '50px';
		}
	}
	
	div.onmouseleave = function()
	{
		if(!isCartOpen)
		{
			this.style.right = '-400px';
			carrito.style.right = '0px';
		}
	}
	*/
	
	var proHold = document.createElement('div');
	div.appendChild(proHold);
	
	var proUl = document.createElement('ul');
	proUl.id = 'proUl';
	proHold.appendChild(proUl);
	
	var checkHold = document.createElement('div');
	div.appendChild(checkHold);

	var total = document.createElement('p');
	total.id = 'total';
	total.appendChild(document.createTextNode('Total: $' + totalCompras));
	checkHold.appendChild(total);
	
	var vaciar = document.createElement('a');
	vaciar.id = 'vaciar';
	vaciar.appendChild(document.createTextNode('Vaciar Carrito'));
	vaciar.onclick = function vaciarLista()
	{
		ClearCarrito(true);
	}
	div.appendChild(vaciar);
	
	var cerrar = document.createElement('a');
	cerrar.id = 'cerrarCarrito';
	//cerrar.innerHTML = '&#128473;';
	cerrar.innerHTML = 'Cerrar Carrito';
	cerrar.onclick = function cerrarLista()
	{
		OpenCart();
	}
	div.appendChild(cerrar);
	
	var checkout = document.createElement('a');
	checkout.id = 'checkoutButt';
	checkout.appendChild(document.createTextNode('Checkout'));
	checkout.onclick = GoCheckout;
	checkHold.appendChild(checkout);
	
	document.body.appendChild(div);
	
	
	isCartOpen = false;
}

function OpenCart()
{
	var carritoCont = document.getElementById('cartProd');
	
	if(carritoCont)
	{
		if(!isCartOpen)
		{
			carritoCont.style.opacity = '1';
			carritoCont.style.height = 'auto';
			UpdateCart();
			isCartOpen = true;
		}
		else
		{
			CloseCart();
		}
	}
	else
	{
		console.log('Error fatal');
	}
}


function CloseCart()
{
	var clCar = document.getElementById('cartProd');
	clCar.style.opacity = '0';
	clCar.style.height = '0';
	isCartOpen = false;
}

function ToggleFilt(){
	var filt = document.getElementById('filtro');
	var p = filTab.getElementsByTagName('p')[0];
	filTab.style.display = 'block';
	filt.style.transform = 'scale(1)';
	if(filt.isOpen)
	{
		filt.style.top = '-400px';
		filt.style.height = '0px';
		p.innerHTML = '<span>&#11206;</span>FILTRAR';
		filt.isOpen = false;
	}
	else
	{
		filt.style.top = '0px';
		filt.style.height = '400px';
		p.innerHTML = '<span>&#11205;</span>FILTRAR';
		filt.isOpen = true;
	}
	
	
}
/*
function CloseFilt(){
	var filt = document.getElementById('filtro');

	filt.style.top = '-240px';
	filt.isOpen = false;
}
*/
function ToggleCat()
{
	var elem = document.getElementById(this.cat);
	var filt = document.getElementById('filtro');
	
	if(!elem)
	{
		console.log('Error al cargar categorias!');
	}
	else
	{
		if(elem.style.display == 'block')
		{
			elem.style.display = 'none';
		}
		else
		{
			elem.style.display = 'block';
		}
	}
	
}




function GoCheckout()
{
	if(currentProducts.length > 0)
	{
		carrito.style.display = 'none';
		filTab.style.display = 'none'
		CloseCart();
		ClearProducts();
		
		
		var checkoutHold = document.createElement('div');
		checkoutHold.id = 'checkoutHold';
		holder.appendChild(checkoutHold);
		
		
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode('Checkout '));
		checkoutHold.appendChild(h2);
		
		
		
		var formCheck = document.createElement('form');
		checkoutHold.appendChild(formCheck);
		
		var field = document.createElement('fieldset');
		
		var nombreLabel = document.createElement('label');
		nombreLabel.appendChild(document.createTextNode('Nombre '));
		var fNombre = document.createElement('input');
		nombreLabel.appendChild(fNombre);
		field.appendChild(nombreLabel);
		
		var telLabel = document.createElement('label');
		telLabel.appendChild(document.createTextNode('Telefono '));
		var fTel = document.createElement('input');
		telLabel.appendChild(fTel);
		field.appendChild(telLabel);
		
		var mailLabel = document.createElement('label');
		mailLabel.appendChild(document.createTextNode('Mail '));
		var fmail = document.createElement('input');
		mailLabel.appendChild(fmail);
		field.appendChild(mailLabel);
		
		var lugarLabel = document.createElement('label');
		lugarLabel.appendChild(document.createTextNode('Domicilio a enviar '));
		var fLugar = document.createElement('input');
		lugarLabel.appendChild(fLugar);
		field.appendChild(lugarLabel);
		
		
		var fechaLabel = document.createElement('label');
		fechaLabel.appendChild(document.createTextNode('Tipo de envio '));
		var fechaOpt = document.createElement('select');
		
		var opt1 = document.createElement('option');
		opt1.appendChild(document.createTextNode('Express (1-2 Dias)(+$200)'));
		fechaOpt.appendChild(opt1);
		
		var opt2 = document.createElement('option');
		opt2.appendChild(document.createTextNode('Normal (3-7 Dias)(+$50)'));
		fechaOpt.appendChild(opt2);
		
		var opt3 = document.createElement('option');
		opt3.appendChild(document.createTextNode('Baja prioridad (7-15 Dias)'));
		fechaOpt.appendChild(opt3);
		
		fechaLabel.appendChild(fechaOpt);
		field.appendChild(fechaLabel);
		
		formCheck.appendChild(field);
		
		var listaDiv = document.createElement('div');
		listaDiv.id = 'listaDiv';
		checkoutHold.appendChild(listaDiv);
		
		var checkoutCarritoTitle = document.createElement('h3');
		checkoutCarritoTitle.id = 'checkoutCarritoTitle';
		checkoutCarritoTitle.appendChild(document.createTextNode('Mis productos '));
		listaDiv.appendChild(checkoutCarritoTitle);
		
		var listaOriginal = document.getElementById('proUl');
		var lista = listaOriginal.cloneNode(true);
		lista.id = 'listaCheckout';
		listaDiv.appendChild(lista);


		
		var cancel = document.createElement('a');
		cancel.appendChild(document.createTextNode('VOLVER'));
		cancel.id = 'cancelPur';
		cancel.cat = currentCat;
		cancel.onclick = fillProducts;
		checkoutHold.appendChild(cancel);
		
		var comprar = document.createElement('a');
		comprar.appendChild(document.createTextNode('COMPRAR'));
		comprar.id = 'comprarFinal';
		checkoutHold.appendChild(comprar);
	}
}

function ClearCarrito(b)
{
	var items = document.getElementsByClassName('productsLi');
	
	if(items.length > 0)
	{
		for(var i = items.length-1; i >= 0; i--)
		{
			items[i].parentNode.removeChild(items[i]);
		}
		
		if(b)
		{
			cantidadProductosEnCarrito = 0;
			totalCompras = 0;
			for(var i = 0; i< currentProducts.length; i++)
			{
				currentProducts[i].cantidad = 0;
			}
			currentProducts = [];
			cantidadCarrito.innerHTML = currentProducts.length;
			precioCarrito.innerHTML = '';
			var total = document.getElementById('total');
			total.innerHTML = '<span>Total: </span>$' + totalCompras;
			
		}
	}
}

function ClearProducts()
{
	for(var i = holder.childNodes.length-1; i >= 0; i--)
	{
		holder.removeChild(holder.childNodes[i]);
	}
}

var miniBannerContainer = document.createElement('div');
miniBannerContainer.id = 'miniBannerContainer';
document.getElementsByTagName('body')[0].appendChild(miniBannerContainer);

var miniBannerTimeout = setTimeout(function(){
		//miniBannerContainer.removeChild(miniBanner);
		miniBannerContainer.innerHTML = '';
	},10000);
	

function fillProducts()
{
	
	ClearProducts();
	var e;
	if(this.innerHTML != 'VOLVER')
	{
		ToggleFilt();
		var item = this.getElementsByTagName('a')[0].innerHTML;
		
		currentProd = item;
	}
	carrito.style.display = 'block';
	filTab.style.display = 'block';
	var cat = this.cat;
	currentCat = cat;
	
	
	var bread = document.getElementById('bread');
	//bread.id = 'bread';
	var minBread = bread.getElementsByTagName('p')[0];
	minBread.innerHTML = cat + ' > ' + currentProd;
	//minBread.appendChild(document.createTextNode(cat + ' > ' + currentProd));
	bread.appendChild(minBread);
	catDiv.appendChild(bread);
	
	
	clearTimeout(miniBannerTimeout);
	
	if(!miniBannerContainer.innerHTML == ''){
		miniBannerContainer.innerHTML = '';
		miniBannerContainer.style.bottom = '-5%';
		miniBannerContainer.style.opacity = '0';
	}

	function randomRGB(){
		return Math.floor(Math.random() * 256); 
	}
	
	
	
	var miniBanner = document.createElement('div');
	miniBanner.id = 'miniBanner';
	//miniBanner.style.backgroundColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
	miniBannerContainer.appendChild(miniBanner);
	miniBanner.style.backgroundImage = "url('img/dsktp/ad.jpg')";
	
	var bannerClose = document.createElement('p');
	bannerClose.id = 'bannerClose';
	bannerClose.innerHTML = '&#x02DF;';
	miniBanner.appendChild(bannerClose);
	
	var bannerText = document.createElement('p');
	bannerText.id = 'bannerText';
	bannerText.innerHTML = 'Tenemos lo ultimo Dell en stock!';
	miniBanner.appendChild(bannerText);
	
	var bannerButton = document.createElement('a');
	bannerButton.id = 'bannerButton';
	bannerButton.innerHTML = 'VER MAS';
	miniBanner.appendChild(bannerButton);
	
	var animationTimeout = setTimeout(function(){
		miniBannerContainer.style.bottom = '1%';
		miniBannerContainer.style.opacity = '1';
	},500);
	
	miniBannerTimeout = setTimeout(function(){
		setTimeout(function(){
			
			miniBannerContainer.innerHTML = '';
		},500);
		miniBannerContainer.style.bottom = '-5%';
			miniBannerContainer.style.opacity = '0';
	},10000);
	
	
	switch(currentProd)
	{
		case 'PC':
			if(cat == 'Desktops')
			{
				e = dPcs;
			}
			else
			{
				e = lPcs;
			}
			break;
		
		case 'MAC':
			if(cat == 'Desktops')
			{
				e = dMac;
			}
			else
			{
				e = lMac;
			}
			break;
			
		case 'Mouse':
			e = cMou;
			break;
			
		case 'Monitores':
			e = cMon;
			break;
			
		case 'Impresoras':
			e = cImp;
			break;
			
		case 'Scanners':
			e = cScn;
			break;
			
		case 'Samsung':
			e = tSam;
			break;
			
		case 'Apple':
			e = tApp;
			break;
			
		default:
			e = 0;
			randomHome();
			break;
	}
	
	
	
	
	for(var i=0;i<e.length;i++)
	{
		var div = document.createElement('div');
		div.className = 'producto';
		div.product = e[i];
		div.onclick = OpenProduct;
		
		
		setDelay(i);

		var divImg = document.createElement('div');
		divImg.className = 'prodImg';
		
		var img = document.createElement('img');
		img.src = e[i].imgs[0];
		divImg.appendChild(img);
		div.appendChild(divImg);
		
		var divInfo = document.createElement('div');
		divInfo.className = 'infoProducto';
		
		var nombre = document.createElement('h3');
		nombre.appendChild(document.createTextNode(e[i].nombre));
		divInfo.appendChild(nombre);
		
		var info = document.createElement('p');
		//info.appendChild(document.createTextNode(e[i].info));
		info.innerHTML = e[i].info;
		divInfo.appendChild(info);
		
		div.appendChild(divInfo);
		
		var precio = document.createElement('p');
		precio.className = 'precio';
		precio.appendChild(document.createTextNode('$' + e[i].precio));
		div.appendChild(precio);
		
		var butt = document.createElement('a');
		butt.appendChild(document.createTextNode('VER MAS'));
		//butt.product = e[i];
		//butt.onclick = AddProduct;
		div.appendChild(butt);
		
		holder.appendChild(div);
	}
	
	function setDelay(i){
		setTimeout(function(){
			holder.getElementsByClassName('producto')[i].style.opacity = 1;
			holder.getElementsByClassName('producto')[i].style.transform = 'scale(1)';
		},100 + (i * 100));
	}
}


function randomHome()
{
	currentProd = 'random';
	ClearProducts();
	for(var i=0;i<8;i++)
	{
		setDelay(i);
		var randomCat = categorias[Math.floor(Math.random() * categorias.length)];
		var randomSubCat = categorias[randomCat][Math.floor(Math.random() * categorias[randomCat].length)];
		var randomItem = categorias[randomCat][randomSubCat][Math.floor(Math.random() * categorias[randomCat][randomSubCat].length)];


		var div = document.createElement('div');
		div.className = 'producto';
		div.product = randomItem;
		//div.product = e[i];
		div.onclick = OpenProduct;
		
		var divImg = document.createElement('div');
		divImg.className = 'prodImg';
		
		var img = document.createElement('img');
		img.src = randomItem.imgs[0];
		divImg.appendChild(img);
		div.appendChild(divImg);
		
		var divInfo = document.createElement('div');
		divInfo.className = 'infoProducto';
		
		var nombre = document.createElement('h3');
		nombre.appendChild(document.createTextNode(randomItem.nombre));
		divInfo.appendChild(nombre);
		
		var info = document.createElement('p');
		info.appendChild(document.createTextNode(randomItem.info));
		divInfo.appendChild(info);
		
		div.appendChild(divInfo);
		
		var precio = document.createElement('p');
		precio.className = 'precio';
		precio.appendChild(document.createTextNode('$' + randomItem.precio));
		div.appendChild(precio);
		
		var butt = document.createElement('a');
		butt.appendChild(document.createTextNode('VER MAS'));
		//butt.product = e[i];
		//butt.onclick = AddProduct;
		div.appendChild(butt);
		
		holder.appendChild(div);
	}
	
	function setDelay(i){
		setTimeout(function(){
			holder.getElementsByClassName('producto')[i].style.opacity = 1;
			holder.getElementsByClassName('producto')[i].style.transform = 'scale(1)';
		},100 + (i * 100));
	}
}

function OpenProduct()
{
	var modal = document.createElement('div');
	modal.id = 'modalCover';
	modal.style.opacity = '0';
	
	setTimeout(function(){modal.style.opacity = '1';}, 100);
	
	var innerModal = document.createElement('div');
	innerModal.id = 'modal';
	innerModal.style.top = '0';
	setTimeout(function(){innerModal.style.top = '50%';}, 100);
	modal.appendChild(innerModal);
	
	var divImg = document.createElement('div');
	divImg.id = 'productImages';
	var currentImg = 0;
	var maxImages = this.product.imgs.length;
	for(var i = 0; i < this.product.imgs.length; i++)
	{
		
		var img = document.createElement('img');
		img.src = this.product.imgs[i];
		if(i > 0)
		{
			img.style.opacity = 0;
		}
		divImg.appendChild(img);
		innerModal.appendChild(divImg);
	}
	
	var nextImg = document.createElement('a');
	nextImg.innerHTML = '&#10095;';
	nextImg.id = 'nextImg';
	nextImg.onclick = function(){
		var productImages = document.getElementById('productImages').getElementsByTagName('img');
		productImages[currentImg].style.opacity = 0;
		if(currentImg < maxImages-1)
		{
			currentImg++;
			productImages[currentImg].style.opacity = 1;
		}
		else
		{
			currentImg = 0;
			productImages[currentImg].style.opacity = 1;
		}
	};
	divImg.appendChild(nextImg);
	
	var prevImg = document.createElement('a');
	prevImg.id = 'prevImg';
	prevImg.innerHTML = '&#10094;';
	prevImg.onclick = function(){
		var productImages = document.getElementById('productImages').getElementsByTagName('img');
		productImages[currentImg].style.opacity = 0;
		if(currentImg > 0)
		{
			currentImg--;
			productImages[currentImg].style.opacity = 1;
		}
		else
		{
			currentImg = maxImages-1;
			productImages[currentImg].style.opacity = 1;
		}
	};
	divImg.appendChild(prevImg);
	
	
	
	
	
	var divInfo = document.createElement('div');
	
	var botonCerrar = document.createElement('a');
	//botonCerrar.appendChild(document.createTextNode('X'));
	botonCerrar.innerHTML = '&#128473;';
	botonCerrar.onclick = function(){
		innerModal.style.top = '0';
		modal.style.opacity = '0';
		setTimeout(function(){
			modal.parentNode.removeChild(modal);
			}, 200);
	}
	
	divInfo.appendChild(botonCerrar);
	
	var nombre = document.createElement('h2');
	nombre.appendChild(document.createTextNode(this.product.nombre));
	divInfo.appendChild(nombre);
	
	var masInfo = document.createElement('p');
	masInfo.appendChild(document.createTextNode(this.product.masinfo));
	divInfo.appendChild(masInfo);
	
	innerModal.appendChild(divInfo);
	
	var comprarDiv = document.createElement('div');
	
	
	var divCantidad = document.createElement('div');
	var inputCantidad = document.createElement('input');
	inputCantidad.onblur = function(){
		agregarCarrito.cantidad = parseInt(inputCantidad.value, 10);
	}
	inputCantidad.value = 1;
	var masCantidad = document.createElement('a');
	//masCantidad.appendChild(document.createTextNode('^'));
	masCantidad.innerHTML = '&#11205;';
	masCantidad.onclick = function(){
		inputCantidad.value++;
		agregarCarrito.cantidad = parseInt(inputCantidad.value, 10);
	}
	var menosCantidad = document.createElement('a');
	menosCantidad.appendChild(document.createTextNode('^'));
	menosCantidad.innerHTML = '&#11206;';
	menosCantidad.onclick = function(){
		if(inputCantidad.value > 1)
		{
			inputCantidad.value--;
			agregarCarrito.cantidad = parseInt(inputCantidad.value, 10);
		}
	}
	divCantidad.appendChild(inputCantidad);
	divCantidad.appendChild(masCantidad);
	divCantidad.appendChild(menosCantidad);
	
	
	
	
	var agregarCarrito = document.createElement('a');
	agregarCarrito.appendChild(document.createTextNode('Agregar al carrito'));
	agregarCarrito.cantidad = parseInt(inputCantidad.value, 10);
	agregarCarrito.product = this.product;
	agregarCarrito.onclick = AddProduct;
	comprarDiv.appendChild(agregarCarrito);
	
	comprarDiv.appendChild(divCantidad);
	
	divInfo.appendChild(comprarDiv);
	document.body.appendChild(modal);
}


function AddProduct()
{
	//var tiene = currentProducts.includes(this.product); //no IE
	
	var tiene = false;
	for(var i = 0;i < currentProducts.length; i++)
	{
		if(currentProducts[i] == this.product)
		{
			tiene = true;
			break;
		}
		else
		{
			tiene = false;
		}
	}
	
	
	if(tiene)
	{
		this.product.cantidad += this.cantidad;
	}
	else
	{
		currentProducts.push(this.product);
		this.product.cantidad += this.cantidad;
	}
	
	cantidadProductosEnCarrito += this.cantidad;
	totalCompras += this.product.precio * this.cantidad;
	cantidadCarrito.innerHTML = cantidadProductosEnCarrito;
	precioCarrito.innerHTML = '( $' + totalCompras + ')';
	if(isCartOpen)
	{
		UpdateCart(false);
	}
	else
	{
		OpenCart();
	}
	
	var modalOpen = document.getElementById('modalCover');
	
	
	modal.style.top = '0';
	modalOpen.style.opacity = '0';
	setTimeout(function(){
		modalOpen.parentNode.removeChild(modalOpen);
		}, 200);
	
}