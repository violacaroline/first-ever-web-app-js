/**
 * The main script file of the application.
 *
 * @author Andrea Viola Caroline Åkesson <ca223pw@student.lnu.se>
 * @version 1.0.0
 */

// Import components.
import './components/my-desktop/index.js'
import './components/my-memory/'
import './components/my-memory/my-flip-tile'

// Get document body.
const mainContainer = document.querySelector('#main-container')

// Create and append desktop component.
// mainContainer.appendChild(document.createElement('my-desktop'))

// Create and append my-memory component.
// mainContainer.appendChild(document.createElement('my-memory'))

// Create and append a single flip tile.
mainContainer.appendChild(document.createElement('my-flip-tile'))
