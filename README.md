# gitlab-files-hider

## Fearures
hide automatically files with extension based on the file name

## Usage

### 1. Update the manifest.json
Look for this line :

    "matches": ["https://{GITLAB-DOMAIN}/*/*/merge_requests/*/diffs"],

Change `{GITLAB-DOMAIN}` by your gitlab domain

### 2. Update your list
For now you'll have to edit the file `front/active.js`

Look for this line :

    const getExtensions = () => [".gen.go", ".pb.go", ".pb.txt", ".hs"]

You can add some extensions to the array


### 3. Load the Chrome extension:  

- navigate to chrome://extensions/
- tick "Developer mode" checkbox
- click on "Load unpacked extension..."
- choose the folder


you will need to reload the extension after each change


## TODO
have an option page where you could manage extension in there
( store it into localdb )