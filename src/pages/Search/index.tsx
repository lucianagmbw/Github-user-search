import React from 'react';
import { useState } from 'react';
import Button from '../../core/components/Button';
import ImageLoader from '../../core/components/Loaders/ImageLoader';
import InfoLoader from '../../core/components/Loaders/InfoLoader';
import { makeRequest } from '../../core/utils/request';
import './styles.css';


type UserProps = {
  name: string
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  company: string
  blog: string
  location: string
  created_at: string
}

const Search =() => {


  const [githubResponse, setGithubResponse] = useState<UserProps>()
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('')
  const [showSearchResult, setShowSearchResult] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoading(true)

  makeRequest({ url: `/${ input }` })
      .then(response => setGithubResponse(response.data))
      .finally(() => {
        setIsLoading(false)
    })
    setShowSearchResult(true)
  }
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setInput(value)
  }

return (
  <div className="search-container">
    <div className="search-content">
    <h1 className="search-title">Encontre um perfil Github</h1>
 
    <form onSubmit={ handleSubmit }>
          <input
            type="text"
            value={ input }
            placeholder="Usuário Github"
            className="search-input"
            onChange={ handleOnChange }
          />

          <div className="button-find">
            <Button text="Encontrar" />
          </div>
        </form>

        </div>
        { showSearchResult && (
        <div className="search-result-content">
          {isLoading ? <ImageLoader /> : (
            <div className="search-result-perfil">
              <img src={ githubResponse?.avatar_url } alt={ githubResponse?.name } className="search-result-perfil-img"/>

              <a href={ githubResponse?.html_url } target="_blank" rel="noopener noreferrer">
                <Button text="Ver perfil" />
              </a>
            </div>
          )}

          {isLoading ? <InfoLoader /> : (
            <div className="search-result-info">
              <div className="github-info">
                <span>Repositórios públicos: { githubResponse?.public_repos }</span>
                <span>Seguidores: { githubResponse?.followers }</span>
                <span>Seguindo: { githubResponse?.following }</span>
              </div>

              <div className="user-perfil-info">
                <h1>Informações</h1>

                <p><strong>Empresa:</strong> { githubResponse?.company }</p>
                <p><strong>Website/Blog:</strong> { githubResponse?.blog }</p>
                <p><strong>Localidade:</strong> { githubResponse?.location }</p>
                <p><strong>Membro desde:</strong> { githubResponse?.created_at}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search;