var Matrix

// EXPORTS
exports = module.exports = {
  'name': 'Colorfull',
  'init': init
}

function init (_matrix) {
  Matrix = _matrix

  Matrix.setTick(1000)

  Matrix.on('started', () => {
    console.log(exports.name)
  })

  Matrix.on('stopped', () => {
  })

  Matrix.on('update', () => {
  })

  Matrix.on('draw', () => {
    Matrix.fill(Matrix.RND_COLOR())
  })
}
