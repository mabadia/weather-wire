const React = require('react')


function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="src\components\JPEGS\thunderstorm.avifnder" alt="cicle stones photo by unsplash" />
                    <div>
                        Photo by <a href="https://unsplash.com/photos/BqKdvJ8a5TI">Jonathan Bowers</a> on <a href="https://unsplash.com/photos/BqKdvJ8a5TI">Unsplash</a>
                    </div>
                </div>
          </main>
      </Def>
    )
  }
module.exports = error404
