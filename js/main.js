
{
const open = document.getElementById('open');
const overlay =document.querySelector('.overlay');
const overlay2 =document.getElementById('overlay')
const close =document.getElementById('close');
open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
});
close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

overlay2.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});



  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });




const next =document.getElementById('next');
const prev =document.getElementById('prev');
const ul =document.querySelector('ul')
const slides = ul.children
const dots = [];
let currentIndex =0;

const dts = document.querySelectorAll('dt');
dts.forEach(dt => {
  dt.addEventListener('click', () => {
    dt.parentNode.classList.toggle('appear');

    dts.forEach(el => {
      if (dt !== el){
          el.parentNode.classList.remove('appear');
      }
    });
 });
});


function updateButtons() {
  prev.classList.remove('hidden')
  next.classList.remove('hidden')

  if (currentIndex === 0) {
    prev.classList.add('hidden');
  }
  if (currentIndex === slides.length - 1) {
    next.classList.add('hidden');
  }
}

function moveSlides() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  ul.style.transform = `translateX(${-1*slideWidth * currentIndex}px)`;
}

function setupDots() {
  for (let i = 0; i < slides.length; i++) {
const button = document.createElement('button')
button.addEventListener('click',() => {
 currentIndex = i;
 updateDots();
 updateButtons();
 moveSlides();
});
dots.push(button);
document.querySelector('nav').appendChild(button);

  }
  dots[0].classList.add('current2');

}

function updateDots() {
  dots.forEach(dot => {
    dot.classList.remove('current2');
  });
  dots[currentIndex].classList.add('current2');

}

updateButtons();
setupDots()

next.addEventListener('click',() => {
  currentIndex++;

  updateButtons();
  updateDots();
 moveSlides();
});

prev.addEventListener('click',() => {
  currentIndex--;
  updateDots();
  updateButtons();
moveSlides();
});

window.addEventListener('resize',() => {
  moveSlides();
});

function play() {
  setTimeout(() => {
    if (currentIndex === slides.length - 1) {
      currentIndex =-1;
      
    }
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
    play();
  }, 5000);
}


play();




const open2 = document.getElementById('open2');
const close2 = document.getElementById('close2');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

open2.addEventListener('click', () => {
  modal.classList.remove('hidden2');
  mask.classList.remove('hidden2');
});

close2.addEventListener('click', () => {
  modal.classList.add('hidden2');
  mask.classList.add('hidden2');
});

mask.addEventListener('click', () => {
close2.click();
});







function CountdownTimer(elm,tl,mes){
  this.initialize.apply(this,arguments);
 }
 CountdownTimer.prototype={
  initialize:function(elm,tl,mes) {
   this.elem = document.getElementById(elm);
   this.tl = tl;
   this.mes = mes;
  },countDown:function(){
   var timer='';
   var today=new Date();
   var day=Math.floor((this.tl-today)/(24*60*60*1000));
   var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
   var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
   var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
   var me=this;
 
   if( ( this.tl - today ) > 0 ){
    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">'+hour+'</span></span>';
    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINS</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECS</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
    this.elem.innerHTML = timer;
    tid = setTimeout( function(){me.countDown();},10 );
   }else{
    this.elem.innerHTML = this.mes;
    return;
   }
  },addZero:function(num){ return ('0'+num).slice(-2); }
 }
 function CDT(){
 
  // Set countdown limit
  var tl = new Date('2023/05/07 00:00:00');
 
  // You can add time's up message here
  var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
  timer.countDown();
 }
 window.onload=function(){
  CDT();
 }

}