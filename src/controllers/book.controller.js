import Book from "../models/Book.js"

//Crear libro
export const createBook = async(req, res) => {
  try {
    const { title, description, author } = req.body
    // const title = req.body.title

    if(!title || !description || !author) {
      return res.status(400).json(
        {
          success: false,
          message: "title description and author required"
        }
      )
    }


    const newBook = await Book.create(
      {
        // title: title
        title,
        description,
        author
      }
    )

    res.status(201).json(
      {
        success: true,
        message: "Book created",
        data: newBook
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Book cant created",
        error: error.message
      }
    )
  }
}

//Buscar libro
export const getBooks = async (req, res) => {
try{
    const books = await Book.find().select('title').select('author');

    res.status(200).json(
        {
          success: true,
          message: "Book retrieved",
          data: books
        }
      )
    } catch (error) {
      res.status(500).json(
        {
          success: false,
          message: "Book cant retrieved",
          error: error.message
        }
      )
    }
}

//Actualizar libro
export const updateBookById = async(req, res) => {
  try {
    const { title } = req.body

    const bookId = req.params.id

    if (!title) {
      return res.status(400).json(
        {
          success: true,
          message: "title required",
        }
      )
    }

    const bookUpdated = await Book.findOneAndUpdate(
      {
        _id: bookId 
      },
      {
        title: title
      },
      {
        new: true //se actualizaría igualmente pero es para que me muestre los datos que actualizamos, sino me mostraría los datos anteriores.
      }
    )

    res.status(200).json(
      {
        success: true,
        message: "Book updated",
        data: bookUpdated
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Book cant retrieved",
        error: error.message
      }
    )
  }
} 

// Eliminar libro
export const deleteBookById = async(req, res) => {
    try {
        const bookId = req.params.id

        const deleteBook = await Book.findByIdAndDelete(
            {
                _id: bookId
            }
        )
        
        res.status(200).json(
            {
              success: true,
              message: "Book deleted",
              data: deleteBook
            }
          )
    }  catch (error) {
        res.status(500).json(
          {
            success: false,
            message: "Book cant delete",
            error: error.message
          }
        )
      }
}