const attr = {
  health: {
    value: 75,
    max: 100,
    color: 'red',
    icon: {
      type: 'heart',
      color: 'red',
    },
  },

  sanity: {
    value: 42,
    max: 100,
    color: 'gray',
    icon: {
      type: 'brain',
      color: 'gray',
    },
  },
}

const resources = (s, w, p) => ({
  food: {
    type: 'sunflower',
    count: s,
  },
  water: {
    type: 'tap',
    count: w,
  },
  poop: {
    type: 'regular',
    count: p,
  },
})

const initialState = () => ({
  roomId: 'main',

  clicks: 0,
  started: new Date(),

  attr,

  temperature: 41,

  resources: resources(0, 0, 0),

  upgrades: [],

  rooms: {
    main: {
      buttons: [
        {
          class: ['bg-red-600'],
          icon: {
            type: 'utensils',
            style: {
              color: '#f6e05e',
            },
          },
        },
        {
          class: ['bg-red-600'],
          icon: {
            type: 'cookie',
            style: {
              color: '#896031',
            },
          },
        },
      ],
      resources: resources(5, 5, 0),
      state: 'idle',
      temperature: 23,
    },
  },
})

export const getters = {
  room(state) {
    return state.rooms[state.roomId]
  },
}

export const mutations = {
  click(state, { button }) {
    state.clicks++
  },
  setCurrentRoom(state, { id }) {
    state.roomId = id
  },
}

export const state = () => initialState()
