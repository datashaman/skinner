const attributes = {
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
  seed: {
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
  started: new Date(),

  attributes,

  resources: resources(0, 0, 0),

  upgrades: [],

  rooms: {
    main: {
      state: 'idle',
      resources: resources(5, 5, 0),
    },
  },
})

export const actions = {
  setCurrentRoom(state, { id }) {
    state.roomId = id
  },
}

export const getters = {
  room() {
    return this.rooms[this.roomId]
  },
}

export const state = () => initialState()
