
const pop=document.getElementById('pop'),W=window.WORDS||[];
document.addEventListener('click',e=>{
  const w=e.target.closest('.w');
  if(w){e.stopPropagation();const d=W[+w.dataset.w],r=w.getBoundingClientRect();
    pop.textContent=d.nl+' = '+d.en;pop.style.display='block';
    pop.style.left=Math.max(8,Math.min(r.left,innerWidth-pop.offsetWidth-8))+'px';
    pop.style.top=(r.top-pop.offsetHeight-6<8?r.bottom+6:r.top-pop.offsetHeight-6)+'px';return;}
  pop.style.display='none';
  const s=e.target.closest('.s');if(s)s.classList.toggle('open');
});
addEventListener('scroll',()=>pop.style.display='none',{passive:true});
const a=document.getElementById('au');
if(a){
  const set=(k)=>{const t=a.currentTime,f=a.duration?t/a.duration:0,p=!a.paused;
    a.src=a.dataset[k];document.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('on',b.dataset.v===k));
    a.addEventListener('loadedmetadata',()=>{if(f)a.currentTime=f*a.duration;if(p)a.play()},{once:true});};
  document.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>set(b.dataset.v));
  document.getElementById('back').onclick=()=>a.currentTime=Math.max(0,a.currentTime-5);
  const L=document.getElementById('loop'),setL=v=>{a.loop=v;L.classList.toggle('on',v);localStorage.setItem('loop',v?'1':'0');};
  setL(localStorage.getItem('loop')==='1');L.onclick=()=>setL(!a.loop);
}
const all=document.getElementById('all');
if(all)all.onclick=()=>{document.querySelector('.story').classList.toggle('showall');
  all.textContent=document.querySelector('.showall')?'Verberg vertaling':'Toon hele vertaling';};
document.querySelectorAll('.steps input').forEach((c,i)=>{const k=location.pathname+'#step'+i;
  c.checked=localStorage.getItem(k)==='1';c.onchange=()=>localStorage.setItem(k,c.checked?'1':'0');});
