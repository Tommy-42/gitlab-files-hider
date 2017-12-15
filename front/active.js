// active page content execution

// getExtensions
//
// return all extensions set by the user
// thoses extensions will be automatically hidden
// by the extension
// TODO:
//  get the extension inside the localdb
//  set with options
const getExtensions = () => [".gen.go", ".pb.go", ".pb.txt", ".hs"]

// getFiles
//
// return all the files that will be matched against 
// users extensions
const getFiles = () =>
  document.querySelectorAll('.files .diff-file')

// hideFiles
//
// search among the files and if a name contain an extension
// that the use doesnt want to show
// the extension will hide it
const hideFiles = files => {

  files.forEach( file => {

    const name = file.querySelector(".file-title-name").innerText

    if ( hasExtension(name) == true ) {
      const diff = file.querySelectorAll(".diff-content")
      

      let diff1 = diff[0]
  
      if ( diff1.style.display != "none" )
        diff1.style.display = "none"
    }
  })

}

// hasExtension
//
// check whether name has the extension contained inside the
// array EXTENSIONS ( see definition )
const hasExtension = name => {
  for( let i = 0; i < EXTENSIONS.length; i++) {
    console.log(name + " === " + EXTENSIONS[i])
    if ( name.search(EXTENSIONS[i]) != -1 ) {
      return true
    }
  }
  return false
}

// EXTENSIONS
//
// contain all the exentions that will be matched with the name of
// file.
const EXTENSIONS = getExtensions()

const run = () => {
  console.log("starting")
  const files = getFiles()
  hideFiles(files)
}

document.addEventListener("DOMNodeInserted", (e) => {
  if ( e.target.className == "files" ) {
    run()
  }
})