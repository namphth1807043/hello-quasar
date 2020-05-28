import { httpClient } from 'src/api/http'

export async function saveArticle ({ commit }, { student }) {
  commit('saveStudentBegin')

  const attributes = Object.keys(student.attributeData).map(attributeId => {
    return {
      id: attributeId,
      ...student.attributeData[attributeId]
    }
  })

  const studentData = {
    name: student.name,
    title: student.age,
    attributes
  }

  try {
    if (student._id) {
      student = await httpClient.put(`/students/${student._id}`, studentData)
    } else {
      student = await httpClient.post(
        '/students',
        studentData
      )
    }

    commit('saveStudentSuccess', {
      article: { ...student },
      isSaved: true
    })
  } catch (error) {
    commit('saveStudentError', error)
  }
}

export async function loadStudentsWithoutCategory ({ commit }, { filterData, sort, currentPage, perPage, endpoint = '/articles' }) {
  commit('fetchArticlesBegin')

  try {
    const filterQueryParam = JSON.stringify({
      attributes: populateFilterAttributeData(filterData.attributes),
      userType: filterData.userType,
      date: filterData.date,
      media: filterData.media
    })

    const queryParams = new URLSearchParams({
      filter: filterQueryParam,
      sort: JSON.stringify(sort),
      skip: (currentPage - 1) * perPage,
      limit: perPage
    }).toString()

    const response = await httpClient.get(`${endpoint}?${queryParams}`)

    commit('fetchArticlesSuccess', {
      articles: response.articles,
      total: response.total
    })
  } catch (error) {
    commit('fetchArticlesError', error)
  }
}

export async function loadArticleDetail ({ commit, dispatch }, { articleSlug, config }) {
  try {
    commit('fetchingArticleDetail')
    const article = await httpClient.get(`/articles/slug/${articleSlug}`)

    commit('articleDetailFetchingFinish', {
      article
    })

    dispatch('loadEvaluatedPriceForArticle', {
      config
    })
  } catch (error) {
    commit('articleDetailFetchingFinish', {
      error
    })
  }
}
