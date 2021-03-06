# testjob-hook-prod

_Страница оформления доставки продуктов на Vue.js адаптированная под мобильные устройства_

## Описание

Верстка по макету в Figma. Реализована сама страница оформления заказа (Cart) и карточка товара, которая открывается при клике на ссылку Details.

**На странице приложения реализовано:**

- Анимация и фиксация блока header при скролле. Без использования библиотек, только нативный JS.
- Изменение заголовка в блоке header в зависимости от открытой страницы: если страница Cart, то Cart. Если страница товара, то категория этого товара.

**На странице Cart:**

- Осуществляется подгрузка товаров из внешнего файла с выводом информации в карточки товара.
- Реализовано изменение количества товара отдельным компонентом. Этот же компонент используется в карточке товара. Для хранения состояния используется Vuex.
- Форма заказа с кастомным оформлением полей.

**На странице товара:**

- Вывод информации о товаре.
- Слайдер с товарами, которые покупают с этим продуктом. Реализовано через плагин Swiper. Товары подгружаются из внешнего файла. В компоненте так же, как в блоке о товаре, используется компонент для добавления/изменения количества товара.
- Блок Nutritions. Количественные показатели реализованы с помощью Grid. Данные подгружаются из внешнего файла. При клике на кнопку Hide/Show плавно, с анимацией скрываются.
- В блоке Other подгружаются свойства товара из внешнего файла.

## Запуск проекта

Сборка на Webpack. Для запуска сборки:

Установите все зависимости:

```
npm install
```

Запустите проект

```
npm run serve
```
