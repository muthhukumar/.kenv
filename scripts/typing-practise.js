import '@johnlindquist/kit'

// Menu: Typing practice
// Description: Based on the selected difficulty type it will open the typeracer website
// Author: Muthukumar
// Twitter: @am_muthukumar

const urls = [
  {
    title: 'Normal typing practice',
    url: 'https://play.typeracer.com/',
  },
  {
    title: 'Death match typing practice',
    url: 'https://play.typeracer.com/?universe=accuracy',
  },
]

let url = await arg(
  `Select difficulty type`,
  urls.map(({title, url}) => ({
    name: title,
    description: url,
    value: url,
  })),
)

exec(`open '${url}'`)
