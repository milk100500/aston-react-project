# aston-react-project

Реализовано приложение для просмотра и сохранения музыкальных альбомов

Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

### React

- Функциональные компоненты c хуками в приоритете над классовыми: [components](https://github.com/milk100500/aston-react-project/tree/main/src/components), [pages](https://github.com/milk100500/aston-react-project/tree/main/src/pages).
- Есть разделение на умные и глупые компоненты

  Умные: [SearchPanel](https://github.com/milk100500/aston-react-project/blob/main/src/components/searchPanel/searchPanel.tsx), [AlbumCard](https://github.com/milk100500/aston-react-project/blob/main/src/components/albumCard/albumCard.tsx), и т.д.

  Глупые: [Input](https://github.com/milk100500/aston-react-project/blob/main/src/components/input/input.tsx), [FavoriteButton](https://github.com/milk100500/aston-react-project/blob/main/src/components/favoriteButton/favoriteButton.tsx), и т.д.

- Есть рендеринг списков: [Favorites](https://github.com/milk100500/aston-react-project/blob/main/src/pages/favorites/favorites.tsx), [History](https://github.com/milk100500/aston-react-project/blob/main/src/pages/history/history.tsx), и т.д.
- Реализована хотя бы одна форма: [Form](https://github.com/milk100500/aston-react-project/blob/main/src/components/form/form.tsx).
- Есть применение Контекст API: [CollapseProvider](https://github.com/milk100500/aston-react-project/blob/main/src/context/collapseProvider.tsx) в [index.tsx](https://github.com/milk100500/aston-react-project/blob/main/src/index.tsx).
- Есть применение предохранителя: [ErrorBoundary](https://github.com/milk100500/aston-react-project/blob/main/src/components/errorBoundary/errorBoundary.tsx) в [Main](https://github.com/milk100500/aston-react-project/blob/main/src/pages/main/main.tsx).
- Есть хотя бы один кастомный хук: [useDebounce](https://github.com/milk100500/aston-react-project/blob/main/src/hooks/useDebounce.ts), [useAuth](https://github.com/milk100500/aston-react-project/blob/main/src/hooks/useAuth.ts).
- Хотя бы несколько компонентов используют PropTypes: [AlbumCard](https://github.com/milk100500/aston-react-project/blob/main/src/components/albumCard/albumCard.tsx), [HistoryItem](https://github.com/milk100500/aston-react-project/blob/main/src/components/historyItem/historyItem.tsx).
- Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/milk100500/aston-react-project/blob/main/src/hooks/useDebounce.ts), использован в компоненте [SearchPanel](https://github.com/milk100500/aston-react-project/blob/main/src/components/searchPanel/searchPanel.tsx).
- Есть применение lazy + Suspense: [Main](https://github.com/milk100500/aston-react-project/blob/main/src/pages/main/main.tsx).

### Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/milk100500/aston-react-project/blob/main/src/store/index.ts).
- Используем слайсы: [authSlice](https://github.com/milk100500/aston-react-project/blob/main/src/store/auth/authSlice.ts), [searchSlice](https://github.com/milk100500/aston-react-project/blob/main/src/store/search/searchSlice.ts).
- Есть хотя бы одна кастомная мидлвара: [logoutMiddleware](https://github.com/milk100500/aston-react-project/blob/main/src/store/middleware/logoutMiddleware.ts).
- Используется RTK Query: [favoritesApi](https://github.com/milk100500/aston-react-project/blob/main/src/api/favoritesApi.ts), [historyApi](https://github.com/milk100500/aston-react-project/blob/main/src/api/historyApi.ts), [musicApi](https://github.com/milk100500/aston-react-project/blob/main/src/api/musicApi.ts).
- Используется Transforming Responses: [favoritesApi](https://github.com/milk100500/aston-react-project/blob/main/src/api/favoritesApi.ts).

## 2 уровень

- Использован TypeScript.
- Использование Firebase для учетных записей пользователей и их Избранного и Истории поиска, применение: [auth](https://github.com/milk100500/aston-react-project/blob/main/src/store/actions/checkAuth.ts), [favoritesApi](https://github.com/milk100500/aston-react-project/blob/main/src/api/favoritesApi.ts), [historyApi](https://github.com/milk100500/aston-react-project/blob/main/src/api/historyApi.ts).

## API

В своем проекте я использовал mokapi для для получения данных о музыкальных альбомах.

Mokapi - это инструмент для создания фейкового (mock) API для разработки и тестирования приложений. Он позволяет эмулировать серверное взаимодействие и предоставлять тестовые данные через API-эндпоинты.
