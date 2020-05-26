import { select } from 'redux-saga/effects'

export function* processSelectorsToPayload(data) {
  const selectors = {}

  for(let i = 0; i < data.length; i++) {
    let ctx = selectors
    const selectorItem = data[i]

    if(Array.isArray(selectorItem?.deepLevel) && selectorItem.deepLevel.length > 0) {

      for(let j = 0; j < selectorItem.deepLevel.length; j++) {
        const keyItem = selectorItem.deepLevel[j]

        if(!ctx[keyItem]) {
          ctx[keyItem] = {}
        }

        ctx = ctx[keyItem]
      }
    }

    ctx[selectorItem.key] = yield select(selectorItem.selector)
  }

  return selectors
}
