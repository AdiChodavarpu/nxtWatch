import React from 'react'

const SavedContext = React.createContext({
  SavedItemList: [],
  updatedSavedList: () => {},
  isDark: true,
  updateTheme: () => {},
})

export default SavedContext
