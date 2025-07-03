// process

// input arguments
console.log(process.argv)

// we can control event processes
process.on('exit', () => {
// clean up resources
  console.log('resources cleaned up')
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.platform)
console.log(process.env.NODE_ENV)

// control the process and its exit
process.exit(1)
