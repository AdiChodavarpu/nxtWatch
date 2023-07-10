import React from 'react'

const SavedContext = React.createContext({
  SavedItemList: [],
  updatedSavedList: () => {},
  isDark: false,
  updateTheme: () => {},
})

export default SavedContext
