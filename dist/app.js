const RELEASE = window.ORBI_RELEASE || {version:'1.2',build:3,minimumOS:'26.6',size:'',sha256:''};
let lang;try{lang=localStorage.getItem('orbi-language')||'en'}catch{lang='en'}
const page=location.pathname.includes('/download')?'download':location.pathname.includes('/about')?'about':'product';
const tr=(en,zh)=>lang==='zh'?zh:en;
const navLink=(key,url,label)=>`<a href="${url}" ${page===key?'aria-current="page"':''}>${label}</a>`;
function render(){
  if(window.demoCleanup)window.demoCleanup();
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.title=`Orbi 1.2 — ${tr('Your notch, reimagined.','重新想象你的刘海。')}`;
  document.querySelector('#app').innerHTML=`
    <a class="skip-link" href="#main">${tr('Skip to content','跳至内容')}</a>
    <header><nav class="nav" aria-label="${tr('Main navigation','主导航')}">
      <a class="logo" href="/" aria-label="Orbi home"><img src="/assets/orbi-icon.png" width="32" height="32" alt=""><span>orbi</span></a>
      <div class="links">${navLink('product','/',tr('Overview','产品'))}${navLink('download','/download/',tr('Download','下载与使用'))}${navLink('about','/about/',tr('About','关于'))}
        <button class="language-button" id="language" aria-label="${tr('切换为中文','Switch to English')}">${tr('中文','EN')}</button>
      </div></nav></header>
    <div class="release-banner"><a href="/download/#whats-new"><span class="new-tag">1.2</span>${tr('A new shape. A closer connection. Meet the new Orbi.','全新展开界面，独立电量提示，还有应用内更新。了解新版 Orbi。')} <span aria-hidden="true">↗</span></a></div>
    <main id="main">${page==='product'?productPage():page==='download'?downloadPage():aboutPage()}</main>
    <footer class="site-footer"><div class="footer-grid"><div class="footer-brand"><a class="logo" href="/"><img src="/assets/orbi-icon.png" width="32" height="32" alt=""><span>orbi</span></a><p>${tr('A little more possibility. At the top of your Mac.','在 Mac 顶部，留出更多可能。')}</p><span>${tr('Designed & created by PaJii','设计与创作：PaJii')}</span></div>
      <nav><h2>${tr('Explore','探索')}</h2><a href="/">${tr('Overview','产品介绍')}</a><a href="/download/">${tr('Download Orbi 1.2','下载 Orbi 1.2')}</a><a href="/about/">${tr('About PaJii','关于 PaJii')}</a></nav>
      <nav><h2>${tr('Get started','开始使用')}</h2><a href="/download/#install">${tr('Installation','安装指南')}</a><a href="/download/#permissions">${tr('Permissions','权限说明')}</a><a href="/download/#whats-new">${tr('What’s new in 1.2','1.2 更新内容')}</a></nav>
      <div><h2>${tr('Made for your Mac','为 Mac 而作')}</h2><p>macOS ${RELEASE.minimumOS}+<br>Apple silicon · Intel<br>${tr('English · 简体中文','简体中文 · English')}</p></div>
    </div><div class="footer-bottom"><span>© 2026 PaJii · Orbi</span><span>${tr('Independent. Native. Yours.','独立创作，原生体验。')}</span><a href="#">${tr('Back to top','回到顶部')} ↑</a></div></footer>`;
  document.querySelector('#language').onclick=()=>{lang=lang==='zh'?'en':'zh';try{localStorage.setItem('orbi-language',lang)}catch{}render()};
  if(page==='product')setupProduct();
}
render();
