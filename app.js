const $=s=>document.querySelector(s);
const stars=$('.stars');
for(let i=0;i<90;i++){const star=document.createElement('i');star.className='star';star.style.left=Math.random()*100+'%';star.style.top=Math.random()*100+'%';star.style.animationDelay=(Math.random()*4)+'s';star.style.opacity=.2+Math.random()*.7;stars.appendChild(star)}
$('#menuToggle').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
let lang='ar';
$('#langToggle').addEventListener('click',()=>{
  lang=lang==='ar'?'en':'ar';document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$('#langToggle').textContent=lang==='ar'?'EN':'عربي';
  document.querySelectorAll('[data-ar]').forEach(el=>el.textContent=el.dataset[lang]);
  const copy={
    ar:{title:'الكونُ مُعتمٌ',line:'وعقلك أعمق.',sub:'هناك أشياء لا تراها… لأنك لم تتعلم كيف تنظر.',desc:'أرشيف يستكشف العقل البشري، والسلوك، والفلسفة، والمخطوطات التي تركها الإنسان خلفه بحثًا عن معنى المجهول.',cta:'ادخل إلى المجهول'},
    en:{title:'THE UNIVERSE IS DARK.',line:'YOUR MIND IS DEEPER.',sub:'Some things remain unseen because you have not learned how to look.',desc:'An archive exploring the human mind, behavior, philosophy, and manuscripts left behind in humanity’s search for the unknown.',cta:'ENTER THE UNKNOWN'}
  };
  const c=copy[lang];$('.hero h1').innerHTML=lang==='ar'?`${c.title}<br><em>${c.line}</em>`:`${c.title}<br><em>${c.line}</em>`;$('.hero-sub').textContent=c.sub;$('.hero-desc').textContent=c.desc;$('.primary-cta span').textContent=c.cta;
});
let completed=Number(localStorage.getItem('void-lessons')||0);
function updateProgress(){const pct=Math.min(100,completed/5*100);$('#progressBar').style.width=pct+'%';$('#progressText').textContent=`${completed} / 5 دروس مكتملة`;const names=['01 — الاستيقاظ','02 — الاكتشاف','03 — الظل','04 — الارتقاء','05 — الفراغ'];$('#levelName').textContent=names[Math.min(4,Math.floor(completed))]}
updateProgress();
$('#completeLesson').addEventListener('click',()=>{if(completed<5){completed++;localStorage.setItem('void-lessons',completed);updateProgress();$('#completeLesson').innerHTML=completed===5?'اكتمل المسار <b>✓</b>':'تم تسجيل الدرس <b>✓</b>'}else{$('#completeLesson').textContent='أكملت الدروس التجريبية'}});
$('#soundToggle').addEventListener('click',()=>{alert('الصوت الاختياري سيُضاف في مرحلة الصوت. لا يتم تشغيل أي صوت تلقائيًا.');});
