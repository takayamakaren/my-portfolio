import { useState, useEffect, useRef } from 'react'

/**
 * 現在ビューポートに表示されているセクションのIDを返すフック。
 * ヘッダーナビゲーションのアクティブハイライトに使用する。
 *
 * rootMargin '0px 0px -85% 0px' により、
 * セクション上端がビューポートの上から15%以内に入ったときにアクティブと判定する。
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')
  const idsRef = useRef(ids)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -85% 0px', threshold: 0 },
    )

    idsRef.current.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}
