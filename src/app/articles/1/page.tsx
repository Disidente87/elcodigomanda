'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ArticlePage() {
  const params = useParams();
  const articleId = params.articleId;

  // En un caso real, aquí cargarías el contenido del artículo usando el articleId
  const [articleContent, setArticleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de contenido de un artículo
    // En una aplicación real, harías una llamada a una API o leerías un archivo
    const fetchArticleContent = async () => {
      setIsLoading(true);
      // Simulación de retardo de red
      await new Promise(resolve => setTimeout(resolve, 500));
      setArticleContent(`Este es el contenido del artículo con ID: ${articleId}. Aquí puedes editar el contenido.`);
      setIsLoading(false);
    };

    if (articleId) {
      fetchArticleContent();
    }
  }, [articleId]);

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleContent(event.target.value);
  };

  // En un caso real, aquí tendrías un botón para guardar los cambios
  const handleSave = () => {
    console.log("Contenido a guardar:", articleContent);
    // Implementar lógica para guardar el contenido del artículo
  };

  if (isLoading) {
    return <div>Cargando artículo...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Artículo {articleId}</h1>
      <textarea
        className="w-full h-64 p-2 border rounded"
        value={articleContent}
        onChange={handleContentChange}
      />
      {/* Botón de guardar (funcionalidad no implementada en este paso) */}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        Guardar Cambios
      </button>
    </div>
  );
}
