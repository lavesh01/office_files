var editor = grapesjs.init({
  container: '#gjs',
  fromElement: true,
  height: '100%',
  showOffsets: 1,
  noticeOnUnload: 0,
    storageManager: {
      type: 'local', 
      autosave: true, 
      autoload: true, 
      stepsBeforeSave: 1, 
      options: {
        local: { 
          key: 'gjsProject', 
        },
      }
    },
  
  // canvas: {
  //   scripts: [
  //   'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'
  //   ]
  // },

  // plugins: ['grapesjs-preset-webpage','gjs-blocks-basic'],
  
  
  plugins: ["gjs-blocks-basic",'grapesjs-plugin-forms','grapesjs-custom-code','grapesjs-component-countdown','grapesjs-navbar','grapesjs-typed','grapesjs-tooltip','grapesjs-tabs'],
    pluginsOpts: {
      // 'grapesjs-preset-webpage': {
      //   options
      // },
      "gjs-blocks-basic": {},
      'grapes.js-plugin-forms':{},
      'grapesjs-custom-code': {},
      'grapesjs-component-countdown': {},
      'grapesjs-navbar': {},
      'grapesjs-typed': {},
      'grapesjs-tooltip': {},
      'grapesjs-tabs': {},
  },
});


// Use the API
const blockManager = editor.Blocks;

blockManager.add('h1-block', {
  label: 'Heading',
  content: '<h1>Put your title here</h1>',
  category: 'Basic',
  attributes: {
    title: 'Insert h1 block'
  }
});

//   const blocks = blockManager.getAll();
//   console.log(JSON.stringify(blocks));


       
const btn = document.getElementById('get-btn');
btn.addEventListener('click', () => {
    console.log(editor.getHtml());
    console.log(editor.getCss());
})