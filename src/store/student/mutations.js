export function saveStudentBegin (state) {
  state.error = null
  state.isSaved = false
  state.student = null
}

export function saveStudentSuccess (state, { article, isSaved }) {
  state.student = article
  state.isSaved = isSaved
}

export function saveStudentError (state, error) {
  state.error = error
  state.isSaved = false
}

export function fetchStudentsBegin (state) {
  state.students = []
  state.error = null
  state.isLoading = true
}

export function fetchStudentsSuccess (state, { students }) {
  state.students = students
  state.error = null
  state.isLoading = false
}

export function fetchStudentsError (state, error) {
  state.error = error
  state.isLoading = false
}

export function resetEditingStudent (state) {
  state.student = null
  state.isSaved = false
  state.error = null
}

export function fetchingStudentDetail (state) {
  state.studentDetail = {
    ...state.studentDetail,
    student: null,
    isLoading: true,
    error: null
  }
}

export function studentDetailFetchingFinish (state, payload) {
  state.studentDetail = {
    ...state.studentDetail,
    ...payload,
    isLoading: false
  }
}

export function setSearchParams (state, search) {
  state.search = search
}

export function setFilterParams (state, filter) {
  state.filter = filter
}
