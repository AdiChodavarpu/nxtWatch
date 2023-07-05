import React from 'react'

const SavedContext = React.createContext({
  SavedItemList: [],
  updatedSavedList: () => {},
})

export default SavedContext
