;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9053: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          EnableSection: function () {
            return W
          },
          Graph: function () {
            return A
          },
          GraphPage: function () {
            return Z
          },
          InfoTooltip: function () {
            return X
          },
          SliderWithInfo: function () {
            return _
          },
          Tweaks: function () {
            return B
          },
          default: function () {
            return L
          },
        })
      var i = t(7757),
        r = t.n(i),
        l = t(2137),
        o = t(7375),
        c = t(5893),
        a = t(7329),
        s = t(6156),
        u = t(4699),
        d = t(7294)
      function h(e, n) {
        return {
          get: function () {
            var t = n.getItem(e)
            if (t && 'undefined' !== t) return JSON.parse(t)
          },
          update: function (t) {
            n.setItem(e, JSON.stringify(t))
          },
          remove: function () {
            n.removeItem(e)
          },
        }
      }
      var f = t(4309),
        g = t(6658),
        x = t(980),
        p = t(8017),
        j = t(8420),
        v = t(5684),
        y = t(4115),
        b = t(3014),
        m = t(8134),
        k = t(1033),
        C = t(6327),
        S = t(2026),
        w = t(4096),
        O = t(8235),
        I = t(155),
        N = t(3924),
        D = t(4189),
        E = t(3986),
        F = t(6569)
      function T(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, i)
        }
        return t
      }
      function P(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? T(Object(t), !0).forEach(function (n) {
                ;(0, s.Z)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
        }
        return e
      }
      var z = t.e(4).then(t.bind(t, 7004)),
        R = t.g.window ? t(6923).f$ : null,
        H = t.g.window ? t(6923).s6 : null,
        M = {
          enabled: !0,
          charge: -350,
          collision: !0,
          collisionStrength: 0,
          linkStrength: 0.1,
          linkIts: 1,
          particles: !1,
          particlesNumber: 0,
          particlesWidth: 4,
          linkOpacity: 0.4,
          linkWidth: 1,
          nodeRel: 4,
          labels: !0,
          labelScale: 1.5,
          alphaDecay: 0.02,
          alphaTarget: 0,
          alphaMin: 0,
          velocityDecay: 0.25,
          gravity: 0.5,
          gravityOn: !0,
          colorful: !0,
          galaxy: !0,
          ticks: 1,
          hover: 'highlight',
          click: 'select',
          doubleClick: 'local',
          iterations: 0,
          highlight: !0,
          highlightNodeSize: 2,
          highlightLinkSize: 2,
        }
      function L() {
        var e = (0, d.useState)(!1),
          n = e[0],
          t = e[1]
        return (
          (0, d.useEffect)(function () {
            t(!0)
          }, []),
          n ? (0, c.jsx)(Z, {}) : null
        )
      }
      function Z() {
        var e = (function (e, n) {
            var t,
              i = h(
                e,
                null !==
                  (t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
                    .storage) && void 0 !== t
                  ? t
                  : localStorage,
              ),
              r = i.get(),
              l = void 0 !== r ? r : n
            l !== r && i.update(l)
            var o = (0, d.useState)(l),
              c = o[0],
              a = o[1]
            return (
              (0, d.useEffect)(
                function () {
                  c !== l && a(l)
                },
                [e],
              ),
              [
                c,
                function (e) {
                  e instanceof Function
                    ? a(function (n) {
                        var t = e(n)
                        return i.update(t), t
                      })
                    : (a(e), i.update(e))
                },
              ]
            )
          })('physics', M),
          n = (0, u.Z)(e, 2),
          t = n[0],
          i = n[1],
          r = (0, d.useState)(null),
          l = r[0],
          o = r[1],
          f = (0, d.useState)(null),
          g = f[0],
          x = f[1],
          v = (0, d.useRef)({}),
          y = (0, d.useRef)({}),
          b = function () {
            return fetch('http://localhost:35901/graph')
              .then(function (e) {
                return e.json()
              })
              .then(function (e) {
                ;(v.current = Object.fromEntries(
                  e.nodes.map(function (e) {
                    return [e.id, e]
                  }),
                )),
                  (y.current = e.links.reduce(function (e, n) {
                    var t, i, r
                    return P(
                      P({}, e),
                      {},
                      ((r = {}),
                      (0, s.Z)(
                        r,
                        n.source,
                        [].concat((0, a.Z)(null !== (t = e[n.source]) && void 0 !== t ? t : []), [
                          n,
                        ]),
                      ),
                      (0, s.Z)(
                        r,
                        n.target,
                        [].concat((0, a.Z)(null !== (i = e[n.target]) && void 0 !== i ? i : []), [
                          n,
                        ]),
                      ),
                      r),
                    )
                  }, {}))
                var n = JSON.parse(JSON.stringify(e))
                o(n)
              })
          }
        ;(0, d.useEffect)(function () {
          new EventSource('http://127.0.0.1:35901/current-node-id').addEventListener(
            'message',
            function (e) {
              var n = e.data
              x(n)
            },
          ),
            b()
        }, []),
          (0, d.useEffect)(
            function () {
              g && b()
            },
            [g],
          )
        var m = (0, d.useState)(!1),
          k = m[0],
          C = (m[1], (0, d.useState)(!0)),
          S = C[0],
          w = C[1]
        return l
          ? (0, c.jsxs)('div', {
              children: [
                S
                  ? (0, c.jsx)(
                      B,
                      P(
                        P({}, { physics: t, setPhysics: i, threeDim: k }),
                        {},
                        {
                          onClose: function () {
                            w(!1)
                          },
                        },
                      ),
                    )
                  : (0, c.jsx)(p.xu, {
                      position: 'absolute',
                      zIndex: 'overlay',
                      marginTop: '2%',
                      marginLeft: '2%',
                      children: (0, c.jsx)(j.h, {
                        'aria-label': 'Settings',
                        icon: (0, c.jsx)(N.e, {}),
                        onClick: function () {
                          return w(!0)
                        },
                      }),
                    }),
                (0, c.jsx)(
                  A,
                  P(
                    { nodeById: v.current, linksByNodeId: y.current },
                    { physics: t, graphData: l, threeDim: k, emacsNodeId: g },
                  ),
                ),
              ],
            })
          : null
      }
      var X = function (e) {
          var n = e.infoText
          return (0, c.jsx)(p.xu, {
            paddingLeft: '1',
            children: (0, c.jsx)(v.u, {
              label: n,
              placement: 'top',
              color: 'gray.100',
              bg: 'gray.800',
              hasArrow: !0,
              children: (0, c.jsx)(D.h, {}),
            }),
          })
        },
        _ = function (e) {
          var n = e.min,
            t = void 0 === n ? 0 : n,
            i = e.max,
            r = void 0 === i ? 10 : i,
            l = e.step,
            a = void 0 === l ? 0.1 : l,
            s = e.value,
            u = void 0 === s ? 1 : s,
            d = (0, o.Z)(e, ['min', 'max', 'step', 'value']),
            h = d.onChange,
            f = d.label,
            g = d.infoText
          return (0, c.jsxs)(p.xu, {
            children: [
              (0, c.jsxs)(p.xu, {
                display: 'flex',
                alignItems: 'flex-end',
                children: [(0, c.jsx)(y.x, { children: f }), g && (0, c.jsx)(X, { infoText: g })],
              }),
              (0, c.jsxs)(b.iR, {
                value: u,
                onChange: h,
                min: t,
                max: r,
                step: a,
                colorScheme: 'purple',
                children: [
                  (0, c.jsx)(b.Uj, { children: (0, c.jsx)(b.Ms, {}) }),
                  (0, c.jsx)(v.u, { label: u.toFixed(1), children: (0, c.jsx)(b.gs, {}) }),
                ],
              }),
            ],
          })
        },
        W = function (e) {
          var n = e.value,
            t = e.onChange,
            i = e.label,
            r = e.infoText,
            l = e.children
          return (0, c.jsxs)(p.xu, {
            children: [
              (0, c.jsxs)(p.xu, {
                display: 'flex',
                justifyContent: 'space-between',
                children: [
                  (0, c.jsxs)(p.xu, {
                    display: 'flex',
                    alignItems: 'center',
                    children: [
                      (0, c.jsx)(y.x, { children: i }),
                      r && (0, c.jsx)(X, { infoText: r }),
                    ],
                  }),
                  (0, c.jsx)(m.r, { isChecked: !!n, onChange: t, colorScheme: 'purple' }),
                ],
              }),
              n && l,
            ],
          })
        },
        B = function (e) {
          var n = e.physics,
            t = e.setPhysics,
            i = (e.threeDim, e.onClose)
          return (0, c.jsxs)(p.xu, {
            zIndex: 'overlay',
            position: 'absolute',
            bg: 'alt.100',
            w: 'xs',
            marginTop: '2%',
            marginLeft: '2%',
            borderRadius: 'md',
            maxH: 650,
            paddingBottom: 5,
            children: [
              (0, c.jsxs)(p.xu, {
                display: 'flex',
                justifyContent: 'flex-end',
                children: [
                  (0, c.jsx)(v.u, {
                    label: 'Reset settings to defaults',
                    children: (0, c.jsx)(j.h, {
                      'aria-label': 'Reset Defaults',
                      icon: (0, c.jsx)(E.A, {}),
                      onClick: function () {
                        return t(M)
                      },
                      colorScheme: 'purple',
                    }),
                  }),
                  (0, c.jsx)(k.P, { onClick: i }),
                ],
              }),
              (0, c.jsx)(g.$B, {
                autoHeight: !0,
                autoHeightMax: 600,
                children: (0, c.jsxs)(C.UQ, {
                  allowMultiple: !0,
                  allowToggle: !0,
                  colorScheme: 'purple',
                  children: [
                    (0, c.jsxs)(C.Qd, {
                      children: [
                        (0, c.jsxs)(C.KF, {
                          display: 'flex',
                          justifyContent: 'space-between',
                          colorScheme: 'purple',
                          children: [
                            (0, c.jsxs)(p.xu, {
                              display: 'flex',
                              children: [
                                (0, c.jsx)(C.XE, {}),
                                (0, c.jsx)(y.x, { children: 'Physics' }),
                              ],
                            }),
                            (0, c.jsx)(m.r, {
                              id: 'physicsOn',
                              onChange: function () {
                                return t(P(P({}, n), {}, { enabled: !n.enabled }))
                              },
                              isChecked: n.enabled,
                              colorScheme: 'purple',
                            }),
                          ],
                        }),
                        (0, c.jsxs)(C.Hk, {
                          children: [
                            (0, c.jsxs)(S.gC, {
                              spacing: 2,
                              justifyContent: 'flex-start',
                              divider: (0, c.jsx)(S.cX, { borderColor: 'gray.200' }),
                              align: 'stretch',
                              children: [
                                (0, c.jsx)(W, {
                                  label: 'Gravity',
                                  value: n.gravityOn,
                                  onChange: function () {
                                    return t(P(P({}, n), {}, { gravityOn: !n.gravityOn }))
                                  },
                                  children: (0, c.jsx)(_, {
                                    label: 'Strength',
                                    value: 10 * n.gravity,
                                    onChange: function (e) {
                                      return t(P(P({}, n), {}, { gravity: e / 10 }))
                                    },
                                  }),
                                }),
                                (0, c.jsx)(_, {
                                  value: -n.charge / 100,
                                  onChange: function (e) {
                                    return t(P(P({}, n), {}, { charge: -100 * e }))
                                  },
                                  label: 'Repulsive Force',
                                }),
                                (0, c.jsx)(W, {
                                  label: 'Collision',
                                  infoText: 'Perfomance sap, disable if slow',
                                  value: n.collision,
                                  onChange: function () {
                                    return t(P(P({}, n), {}, { collision: !n.collision }))
                                  },
                                  children: (0, c.jsx)(_, {
                                    value: 10 * n.collisionStrength,
                                    onChange: function (e) {
                                      return t(P(P({}, n), {}, { collisionStrength: e / 10 }))
                                    },
                                    label: 'Strength',
                                  }),
                                }),
                                (0, c.jsx)(_, {
                                  value: 5 * n.linkStrength,
                                  onChange: function (e) {
                                    return t(P(P({}, n), {}, { linkStrength: e / 5 }))
                                  },
                                  label: 'Link Force',
                                }),
                                (0, c.jsx)(_, {
                                  label: 'Link Iterations',
                                  value: n.linkIts,
                                  onChange: function (e) {
                                    return t(P(P({}, n), {}, { linkIts: e }))
                                  },
                                  min: 0,
                                  max: 6,
                                  step: 1,
                                  infoText:
                                    'How many links down the line the physics of a single node affects (Slow)',
                                }),
                                (0, c.jsx)(_, {
                                  label: 'Viscosity',
                                  value: 10 * n.velocityDecay,
                                  onChange: function (e) {
                                    return t(P(P({}, n), {}, { velocityDecay: e / 10 }))
                                  },
                                }),
                              ],
                            }),
                            (0, c.jsx)(p.xu, {
                              children: (0, c.jsx)(C.UQ, {
                                allowToggle: !0,
                                children: (0, c.jsxs)(C.Qd, {
                                  children: [
                                    (0, c.jsxs)(C.KF, {
                                      children: [
                                        (0, c.jsx)(y.x, { children: 'Advanced' }),
                                        (0, c.jsx)(C.XE, {}),
                                      ],
                                    }),
                                    (0, c.jsx)(C.Hk, {
                                      children: (0, c.jsxs)(S.gC, {
                                        spacing: 2,
                                        justifyContent: 'flex-start',
                                        divider: (0, c.jsx)(S.cX, { borderColor: 'gray.200' }),
                                        align: 'stretch',
                                        children: [
                                          (0, c.jsx)(_, {
                                            label: 'Iterations per tick',
                                            min: 1,
                                            max: 10,
                                            step: 1,
                                            value: n.iterations,
                                            onChange: function (e) {
                                              return t(P(P({}, n), {}, { iterations: e }))
                                            },
                                            infoText:
                                              'Number of times the physics simulation iterates per simulation step',
                                          }),
                                          (0, c.jsx)(_, {
                                            label: 'Stabilization rate',
                                            value: 50 * n.alphaDecay,
                                            onChange: function (e) {
                                              return t(P(P({}, n), {}, { alphaDecay: e / 50 }))
                                            },
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, c.jsxs)(C.Qd, {
                      children: [
                        (0, c.jsxs)(C.KF, { children: [(0, c.jsx)(C.XE, {}), 'Visual'] }),
                        (0, c.jsx)(C.Hk, {
                          children: (0, c.jsxs)(S.gC, {
                            spacing: 2,
                            justifyContent: 'flex-start',
                            divider: (0, c.jsx)(S.cX, { borderColor: 'gray.200' }),
                            align: 'stretch',
                            children: [
                              (0, c.jsx)(_, {
                                label: 'Node size',
                                value: n.nodeRel,
                                onChange: function (e) {
                                  return t(P(P({}, n), {}, { nodeRel: e }))
                                },
                              }),
                              (0, c.jsx)(_, {
                                label: 'Link width',
                                value: n.linkWidth,
                                onChange: function (e) {
                                  return t(P(P({}, n), {}, { linkWidth: e }))
                                },
                              }),
                              (0, c.jsx)(W, {
                                label: 'Labels',
                                value: n.labels,
                                onChange: function () {
                                  return t(P(P({}, n), {}, { labels: !n.labels }))
                                },
                                children: (0, c.jsx)(_, {
                                  label: 'Label Appearance Scale',
                                  value: 5 * n.labelScale,
                                  onChange: function (e) {
                                    return t(P(P({}, n), {}, { labelScale: e / 5 }))
                                  },
                                }),
                              }),
                              (0, c.jsxs)(W, {
                                label: 'Directional Particles',
                                value: n.particles,
                                onChange: function () {
                                  return t(P(P({}, n), {}, { particles: !n.particles }))
                                },
                                children: [
                                  (0, c.jsx)(_, {
                                    label: 'Particle Number',
                                    value: n.particlesNumber,
                                    max: 5,
                                    step: 1,
                                    onChange: function (e) {
                                      return t(P(P({}, n), {}, { particlesNumber: e }))
                                    },
                                  }),
                                  (0, c.jsx)(_, {
                                    label: 'Particle Size',
                                    value: n.particlesWidth,
                                    onChange: function (e) {
                                      return t(P(P({}, n), {}, { particleWidth: e }))
                                    },
                                  }),
                                ],
                              }),
                              (0, c.jsxs)(W, {
                                label: 'Highlight',
                                onChange: function () {
                                  return t(P(P({}, n), {}, { highlight: !n.highlight }))
                                },
                                value: n.highlight,
                                children: [
                                  (0, c.jsx)(_, {
                                    label: 'Highlight Link Thickness Multiplier',
                                    value: n.highlightLinkSize,
                                    onChange: function (e) {
                                      return t(P(P({}, n), {}, { highlightLinkSize: e }))
                                    },
                                  }),
                                  (0, c.jsx)(_, {
                                    label: 'Highlight Node Size Multiplier',
                                    value: n.highlightNodeSize,
                                    onChange: function (e) {
                                      return t(P(P({}, n), {}, { highlightNodeSize: e }))
                                    },
                                  }),
                                  (0, c.jsx)(w.k, {
                                    justifyContent: 'space-between',
                                    children: (0, c.jsx)(y.x, {
                                      children: ' Highlight node color ',
                                    }),
                                  }),
                                  (0, c.jsx)(w.k, {
                                    justifyContent: 'space-between',
                                    children: (0, c.jsx)(y.x, {
                                      children: ' Highlight link color ',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, c.jsxs)(C.Qd, {
                      children: [
                        (0, c.jsxs)(C.KF, { children: [(0, c.jsx)(C.XE, {}), 'Behavior'] }),
                        (0, c.jsx)(C.Hk, {
                          children: (0, c.jsxs)(S.gC, {
                            spacing: 2,
                            justifyContent: 'flex-start',
                            divider: (0, c.jsx)(S.cX, { borderColor: 'gray.200' }),
                            align: 'stretch',
                            children: [
                              (0, c.jsxs)(p.xu, {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                children: [
                                  (0, c.jsx)(y.x, { children: 'Hover Higlight' }),
                                  (0, c.jsxs)(O.v2, {
                                    children: [
                                      (0, c.jsx)(O.j2, {
                                        as: I.z,
                                        rightIcon: (0, c.jsx)(F.v, {}),
                                        children: n.hover,
                                      }),
                                      (0, c.jsxs)(O.qy, {
                                        children: [
                                          (0, c.jsx)(O.sN, { children: 'Off' }),
                                          (0, c.jsx)(O.sN, { children: 'On' }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, c.jsx)(p.xu, {
                                display: 'flex',
                                justifyContent: 'space-between',
                                children: (0, c.jsx)(y.x, { children: 'Click' }),
                              }),
                              (0, c.jsx)(p.xu, {
                                display: 'flex',
                                justifyContent: 'space-between',
                                children: (0, c.jsx)(y.x, { children: 'Double-click' }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        A = function (e) {
          var n = e.physics,
            t = e.graphData,
            i = e.threeDim,
            o = e.linksByNodeId,
            s = e.emacsNodeId,
            h = e.nodeById,
            g = (0, d.useRef)(null),
            p = (0, d.useRef)(null),
            j = (0, f.iP)(),
            v = (0, u.Z)(j, 2),
            y = v[0],
            b = v[1],
            m = (0, d.useState)(null),
            k = m[0],
            C = m[1],
            S = (0, d.useState)({ nodeIds: [] }),
            w = S[0],
            O = S[1]
          ;(0, d.useEffect)(
            function () {
              s && O({ nodeIds: [s] })
            },
            [s],
          )
          var I = k,
            N = (function () {
              if (!I) return {}
              var e = o[I.id]
              return e
                ? Object.fromEntries(
                    [I.id]
                      .concat(
                        (0, a.Z)(
                          e.flatMap(function (e) {
                            return [e.source, e.target]
                          }),
                        ),
                      )
                      .map(function (e) {
                        return [e, {}]
                      }),
                  )
                : {}
            })(),
            D = t.nodes.filter(function (e) {
              var n,
                t = null !== (n = o[e.id]) && void 0 !== n ? n : []
              return (
                w.nodeIds.includes(e.id) ||
                t.some(function (e) {
                  return w.nodeIds.includes(e.source) || w.nodeIds.includes(e.target)
                })
              )
            }),
            E = D.map(function (e) {
              return e.id
            }),
            F = t.links.filter(function (e) {
              var n = 'object' === typeof e.source ? e.source.id : e.source,
                t = 'object' === typeof e.target ? e.target.id : e.target
              return E.includes(n) && E.includes(t)
            }),
            T = (0, d.useMemo)(
              function () {
                return 0 === w.nodeIds.length ? t : { nodes: D, links: F }
              },
              [w, JSON.stringify(Object.keys(h))],
            )
          ;(0, d.useEffect)(
            function () {
              setTimeout(function () {
                var e = i ? p.current : g.current
                null === e || void 0 === e || e.zoomToFit(0, 200)
              }, 1)
            },
            [JSON.stringify(E)],
          ),
            (0, d.useEffect)(function () {
              ;(0, l.Z)(
                r().mark(function e() {
                  var t, l
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (t = i ? p.current : g.current), (e.next = 3), z
                        case 3:
                          ;(l = e.sent),
                            n.gravityOn
                              ? (t.d3Force('x', l.forceX().strength(n.gravity)),
                                t.d3Force('y', l.forceY().strength(n.gravity)),
                                i
                                  ? n.galaxy
                                    ? (t.d3Force('x', l.forceX().strength(n.gravity / 5)),
                                      t.d3Force('z', l.forceZ().strength(n.gravity / 5)))
                                    : (t.d3Force('x', l.forceX().strength(n.gravity)),
                                      t.d3Force('z', l.forceZ().strength(n.gravity)))
                                  : t.d3Force('z', null))
                              : (t.d3Force('x', null),
                                t.d3Force('y', null),
                                i && t.d3Force('z', null)),
                            t.d3Force('link').strength(n.linkStrength),
                            t.d3Force('link').iterations(n.linkIts),
                            n.collision
                              ? t.d3Force('collide', l.forceCollide().radius(20))
                              : t.d3Force('collide', null),
                            t.d3Force('charge').strength(n.charge)
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )()
            }),
            (0, d.useEffect)(
              function () {
                var e
                null === (e = g.current) || void 0 === e || e.d3ReheatSimulation()
              },
              [n],
            )
          var M = (0, d.useRef)(0),
            L = (0, x.useTheme)()
          console.log(L)
          var Z = {
            graphData: T,
            width: y,
            height: b,
            backgroundColor: L.white,
            nodeLabel: function (e) {
              return e.title
            },
            nodeColor: function (e) {
              var t, i
              if (!n.colorful)
                return 0 === Object.keys(N).length
                  ? 'rgb(100, 100, 100)'
                  : N[e.id]
                  ? L.blue[500]
                  : 'rgb(50, 50, 50)'
              var r,
                l,
                c,
                a = ['pink', 'purple', 'blue', 'cyan', 'teal', 'green', 'yellow', 'orange', 'red']
              return L.colors[
                a[
                  ((r =
                    null !== (t = null === (i = o[e.id]) || void 0 === i ? void 0 : i.length) &&
                    void 0 !== t
                      ? t
                      : 0),
                  (l = 0),
                  (c = a.length - 1),
                  Math.min(Math.max(r, l), c))
                ]
              ][500]
            },
            nodeRelSize: n.nodeRel,
            nodeVal: function (e) {
              var n
              return (null !== (n = o[e.id]) && void 0 !== n ? n : []).length
            },
            nodeCanvasObject: function (e, t, i) {
              if (n.labels && (!(i <= n.labelScale) || N[e.id])) {
                var r = e.title,
                  l = r.substring(0, Math.min(r.length, 30)),
                  o = 12 / i,
                  c = [1.1 * t.measureText(l).width, o].map(function (e) {
                    return e + 0.5 * o
                  }),
                  s = Math.min((3 * (i - n.labelScale)) / n.labelScale, 1),
                  u = 0 === Object.keys(N).length ? 0.5 * s : N[e.id] ? 0.5 : 0.15 * s
                ;(t.fillStyle = 'rgba(20, 20, 20, '.concat(u, ')')),
                  t.fillRect.apply(t, [e.x - c[0] / 2, e.y - c[1] / 2].concat((0, a.Z)(c)))
                var d = 0 === Object.keys(N).length ? s : N[e.id] ? 1 : 0.3 * s
                ;(t.textAlign = 'center'),
                  (t.textBaseline = 'middle'),
                  (t.fillStyle = 'rgb(255, 255, 255, '.concat(d, ')')),
                  (t.font = ''.concat(o, 'px Sans-Serif')),
                  t.fillText(l, e.x, e.y)
              }
            },
            nodeCanvasObjectMode: function () {
              return 'after'
            },
            linkDirectionalParticles: n.particles ? n.particlesNumber : void 0,
            linkColor: function (e) {
              return e.source.id === (null === I || void 0 === I ? void 0 : I.id) ||
                e.target.id === (null === I || void 0 === I ? void 0 : I.id)
                ? L.colors.purple[500]
                : L.colors.gray[400]
            },
            linkWidth: n.linkWidth,
            linkDirectionalParticleWidth: n.particlesWidth,
            d3AlphaDecay: n.alphaDecay,
            d3AlphaMin: n.alphaMin,
            d3VelocityDecay: n.velocityDecay,
            onNodeClick: function (e, n) {
              var t = n.timeStamp - M.current < 400
              ;(M.current = n.timeStamp),
                t
                  ? window.open('org-protocol://roam-node?node=' + e.id, '_self')
                  : O(function (n) {
                      return P(P({}, n), {}, { nodeIds: [].concat((0, a.Z)(n.nodeIds), [e.id]) })
                    })
            },
            onBackgroundClick: function () {
              O(function (e) {
                return P(P({}, e), {}, { nodeIds: [] })
              })
            },
            onNodeHover: function (e) {
              n.hover && C(e)
            },
          }
          return (0, c.jsx)('div', {
            children: i
              ? (0, c.jsx)(H, P(P({ ref: p }, Z), {}, { nodeThreeObjectExtend: !0 }))
              : (0, c.jsx)(R, P({ ref: g }, Z)),
          })
        }
    },
    5301: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(9053)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 737, 446, 311, 888, 179], function () {
      return (n = 5301), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])