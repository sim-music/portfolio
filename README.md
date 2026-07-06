# Serafim Sinotov Portfolio

Это статический сайт. Его можно редактировать без сборки и без установки программ: основные тексты лежат в `index.html`, стили в `styles.css`, простая логика плееров в `script.js`.

## Что менять чаще всего

### Контакты

Откройте `index.html` и ищите:

- `sinotovserafim@gmail.com` - email.
- `https://t.me/serafimsimile` - ссылка Telegram.
- `@serafimsimile` - видимый текст кнопки Telegram.

Если нужно поменять контакт, меняйте и ссылку, и видимый текст.

### Тексты на сайте

Откройте `index.html`. Текст между тегами можно менять обычным текстом.

Пример:

```html
<h1 id="hero-title">Music work for thoughtful teams.</h1>
```

Можно заменить только фразу внутри:

```html
<h1 id="hero-title">Your new headline here.</h1>
```

Не удаляйте символы `<`, `>`, `</h1>`, кавычки и названия классов вроде `class="hero-copy"`.

### Картинки

Картинки лежат в папке `assets`.

Главная картинка сейчас:

```html
assets/serafim-studio-still.png
```

Чтобы заменить ее:

1. Положите новую картинку в папку `assets`.
2. В `index.html` найдите `assets/serafim-studio-still.png`.
3. Замените имя файла на новое, например `assets/my-photo.jpg`.

Лучше использовать `.jpg`, `.png` или `.webp`.

## Аудиофайлы для верхнего плеера

Звуковые файлы кладите в папку:

```text
assets/audio
```

Лучше называть файлы латиницей, без пробелов:

```text
sketch-01.mp3
reel-short.mp3
media-bed.mp3
```

Верхний плеер берет файлы из этого места. Чтобы поменять список треков, откройте `index.html` и найдите:

```html
<select class="player-select" aria-label="Choose audio track">
  <option value="assets/audio/sketch-01.mp3">Sketch 01</option>
  <option value="assets/audio/reel-short.mp3">Reel short</option>
  <option value="assets/audio/media-bed.mp3">Media bed</option>
</select>
```

Здесь:

- `value="assets/audio/sketch-01.mp3"` - путь к файлу.
- `Sketch 01` - название, которое видно в плеере.

Если добавляете новый трек, скопируйте одну строку `<option ...>` и поменяйте путь и название.

Важно: пока файла нет в `assets/audio`, плеер покажет сообщение, что аудиофайл еще не добавлен.

## YouTube-блок `Start with the music`

В `index.html` найдите блок:

```html
<div class="video-list" aria-label="Video list">
```

Каждая работа выглядит так:

```html
<button class="video-row is-active" type="button" data-youtube-id="VIDEO_ID_1">
  <span class="track-index">01</span>
  <span>
    <strong>Composition reel</strong>
    <small>Replace VIDEO_ID_1 with a real YouTube video ID.</small>
  </span>
</button>
```

Что менять:

- `data-youtube-id="VIDEO_ID_1"` - ID YouTube-видео.
- `Composition reel` - название работы.
- Текст внутри `<small>...</small>` - короткое описание.

YouTube ID - это часть ссылки после `v=`.

Пример:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

ID здесь:

```text
abc123XYZ
```

Его и нужно поставить в `data-youtube-id`.

Также поменяйте первый iframe:

```html
src="https://www.youtube.com/embed/VIDEO_ID_1"
```

на реальный первый ID:

```html
src="https://www.youtube.com/embed/abc123XYZ"
```

## Что лучше не трогать

Если вы не программируете, лучше не менять:

- `styles.css` - внешний вид и адаптивность.
- `script.js` - работа аудиоплеера, YouTube-переключателя и плавной прокрутки.
- `class="..."`, `id="..."`, `aria-label="..."` в `index.html`.
- Служебные теги вроде `<section>`, `<div>`, `<button>`, `<script>`.

Спокойное правило: меняйте текст, email, ссылки, названия файлов и названия треков. Остальное лучше оставить как есть.
