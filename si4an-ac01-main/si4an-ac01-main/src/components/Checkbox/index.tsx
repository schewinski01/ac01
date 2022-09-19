import style from './style.module.css'

export function Checkbox() {
  return (
    <label className={style.label_container} htmlFor="checkbox">
      <input id="checkbox" type="checkbox" />
      <span aria-hidden="true" data-checked>
        <div>
          <svg viewBox="0 0 12 10" className={style.svg_table}>
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </div>
      </span>
    </label>
  )
}
