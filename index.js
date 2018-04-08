
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const fileDir = process.argv[2]

const options = {
	root: path.resolve(fileDir, '/')
}

glob('/**/*.*(ac3|avi|mp3|mp4|mkv|vob)', options, (er, files) => {
	console.log('file found', files)
})