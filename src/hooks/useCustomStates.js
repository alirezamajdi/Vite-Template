import { useContext } from 'react'
import { CustomStatesContext } from 'src/contexts/CustomStatesContext'

// ----------------------------------------------------------------------
// Always use hooks for accessing context values - don't use contexts directly

const useCustomStates = () => useContext(CustomStatesContext)

export default useCustomStates
